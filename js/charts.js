Lab.plot=function(host,{series,xlabel,ylabel,caption,zero=true,pnl=false,scenarioValue=null,initialX=null,scenarioDetails=null,onScenario=null,axisNote=null}){
 if(!window.d3){host.innerHTML='<p>Chart library unavailable. Read the worked example and data below.</p>';return;}
 const w=700,h=340,m={left:76,right:22,top:20,bottom:62};
 host.innerHTML='';
 const pts=series.flatMap(s=>s.points);
 let xd=d3.extent(pts,p=>p[0]),yd=d3.extent(pts,p=>p[1]);
 if(xd[0]===xd[1])xd=[xd[0]-1,xd[1]+1];
 if(zero)yd=[Math.min(0,yd[0]),Math.max(0,yd[1])];
 else{const pad=Math.max((yd[1]-yd[0])*.12,.1);yd=[yd[0]-pad,yd[1]+pad];}
 if(yd[0]===yd[1])yd=[yd[0]-1,yd[1]+1];
 const x=d3.scaleLinear().domain(xd).range([m.left,w-m.right]);
 const y=d3.scaleLinear().domain(yd).nice().range([h-m.bottom,m.top]);
 const note=document.createElement('p');note.className='chart-axis-note';note.textContent=axisNote||(pnl?'Read this chart: left to right = stock / ETF price in USD, not days. Up / down = the whole position’s profit / loss in USD at the selected evaluation time.':'');if(note.textContent)host.append(note);
 const legend=document.createElement('div');legend.className='legend';legend.innerHTML=series.map(s=>`<span style="--swatch:${s.color}">${esc(s.label)}</span>`).join('')+(pnl?'<span style="--swatch:var(--good)">Green tint: gain above $0</span><span style="--swatch:var(--loss)">Red tint: loss below $0</span>':'');host.append(legend);
 const svg=d3.select(host).append('svg').attr('viewBox',`0 0 ${w} ${h}`).attr('role','img').attr('aria-label',caption);
 svg.append('title').text(caption);
 let focusBand;
 if(pnl){
  const base=Math.max(m.top,Math.min(h-m.bottom,y(0)));
  svg.append('rect').attr('class','profit-band').attr('x',m.left).attr('y',m.top).attr('width',w-m.left-m.right).attr('height',Math.max(0,base-m.top));
  svg.append('rect').attr('class','loss-band').attr('x',m.left).attr('y',base).attr('width',w-m.left-m.right).attr('height',Math.max(0,h-m.bottom-base));
  focusBand=svg.append('rect').attr('class','scenario-band').attr('y',m.top).attr('height',h-m.bottom-m.top).attr('width',18);
 }
 svg.append('g').attr('transform',`translate(0,${h-m.bottom})`).call(d3.axisBottom(x).ticks(6).tickFormat(pnl?v=>'$'+d3.format(",~g")(v):null));
 svg.append('g').attr('transform',`translate(${m.left},0)`).call(d3.axisLeft(y).ticks(5));
 if(zero)svg.append('line').attr('x1',m.left).attr('x2',w-m.right).attr('y1',y(0)).attr('y2',y(0)).attr('stroke','currentColor').attr('stroke-dasharray','3 5').attr('opacity',.4);
 for(const s of series)svg.append('path').datum(s.points).attr('fill','none').attr('stroke',s.color).attr('stroke-width',3).attr('d',d3.line().x(p=>x(p[0])).y(p=>y(p[1])));
 svg.append('text').attr('x',(m.left+w-m.right)/2).attr('y',h-10).attr('text-anchor','middle').text(xlabel);
 svg.append('text').attr('transform','rotate(-90)').attr('x',-(h-m.bottom)/2).attr('y',18).attr('text-anchor','middle').text(ylabel);
 if(pnl){
  const readout=document.createElement('div');readout.className='scenario-readout';readout.setAttribute('role','status');host.append(readout);
  const label=document.createElement('label');label.className='scenario-control';label.append('Underlying price scenario (USD)');
  const range=document.createElement('input');range.type='range';range.min=xd[0];range.max=xd[1];range.step='.01';range.setAttribute('aria-label','Underlying price scenario in USD');label.append(range);host.append(label);
  const hint=document.createElement('p');hint.className='caption';hint.textContent='Drag the dot along the blue curve, click a chart price, or use the slider and arrow keys. The selected scenario changes, not the contract payoff. The coloured highlight is not a probability.';host.append(hint);
  const guide=svg.append('line').attr('y1',m.top).attr('y2',h-m.bottom).attr('stroke','currentColor').attr('stroke-dasharray','2 4').attr('opacity',.6);
  const dot=svg.append('circle').attr('r',6).attr('fill','#2574bb').attr('stroke','white').attr('stroke-width',2).attr('aria-hidden','true');
  const target=svg.append('circle').attr('r',20).attr('fill','transparent').attr('class','scenario-drag').attr('aria-hidden','true');
  const values=series[0].points;
  const interpolate=s=>{let i=d3.bisector(p=>p[0]).left(values,s);if(i===0)return values[0][1];if(i>=values.length)return values.at(-1)[1];const a=values[i-1],b=values[i];return b[0]===a[0]?b[1]:a[1]+(b[1]-a[1])*(s-a[0])/(b[0]-a[0]);};
  const valueAt=scenarioValue||interpolate;
  let current=initialX??(xd[0]+xd[1])/2;
  const update=s=>{
   range.value=Math.max(xd[0],Math.min(xd[1],s));current=+range.value;
   const value=valueAt(current),state=value>1e-8?'gain':value< -1e-8?'loss':'flat';
   const py=Math.max(m.top,Math.min(h-m.bottom,y(value)));
   guide.attr('x1',x(current)).attr('x2',x(current));dot.attr('cx',x(current)).attr('cy',py);target.attr('cx',x(current)).attr('cy',py);
   focusBand.attr('x',Math.max(m.left,Math.min(w-m.right-18,x(current)-9))).attr('class','scenario-band '+state);
   readout.className='scenario-readout '+state;
   readout.textContent=`Underlying ${money(current)} · ${state==='flat'?'Breakeven':state==='gain'?'Gain':'Loss'} ${money(Math.abs(value))} for the whole position. ${scenarioValue?'Calculated from the stated payoff/model.':'Interpolated chart estimate.'}`;
   if(scenarioDetails){const dl=document.createElement('dl');dl.className='scenario-metrics';for(const item of scenarioDetails(current)){const div=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=item.label;dd.textContent=item.value;div.append(dt,dd);dl.append(div);}readout.append(dl);}
   onScenario?.({x:current,value});
   range.setAttribute('aria-valuetext',`${money(current)} underlying; ${state} ${money(Math.abs(value))}`);
  };
  range.oninput=()=>update(+range.value);
  target.call(d3.drag().container(()=>svg.node()).subject(()=>({x:x(current),y:y(valueAt(current))})).on('drag',e=>update(x.invert(e.x))));
  svg.on('click',e=>{const [px]=d3.pointer(e,svg.node());if(px>=m.left&&px<=w-m.right)update(x.invert(px));});
  update(current);
 }
 const p=document.createElement('p');p.className='caption';p.textContent=caption;host.append(p);
 const details=document.createElement('details');
 details.innerHTML='<summary>Read chart values</summary><div class="table-wrap"><table><thead><tr><th>'+esc(xlabel)+'</th>'+series.map(s=>'<th>'+esc(s.label)+'</th>').join('')+'</tr></thead><tbody>'+series[0].points.filter((p,i,a)=>i%Math.max(1,Math.floor(a.length/8))===0||i===a.length-1).map(p=>'<tr><td>'+p[0].toFixed(2)+'</td>'+series.map(s=>{const point=s.points.find(v=>v[0]===p[0]);return '<td>'+(point?point[1].toFixed(2):'—')+'</td>';}).join('')+'</tr>').join('')+'</tbody></table></div>';
 host.append(details);
};
