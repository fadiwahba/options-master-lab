window.Lab={chapters:[],tools:[],visuals:{},glossary:{
"stock":["A small ownership share in a company.","Owning 10 of 1,000 shares means owning 1% before any dilution."],
"ETF":["An exchange-traded fund: shares in a portfolio that trades on an exchange.","A broad equity ETF can hold hundreds of companies, but its weights still matter."],
"dividend":["Cash or other property distributed to shareholders. It is not guaranteed.","A $1 dividend on 10 shares pays $10 before tax."],
"total return":["Price change plus distributions, usually assuming reinvestment when comparing funds.","A $5 price fall and $2 distribution is still a $3 loss per original share."],
"compounding":["Returns earned on earlier returns as well as the original money.","$100 growing 10% twice becomes $121, not $120."],
"drawdown":["A fall from a previous account or asset peak.","From $100 to $80 is a 20% drawdown."],
"liquidity":["The ability to trade a useful size with limited price impact and cost.","A narrow spread with usable quote sizes helps; volume alone is incomplete."],
"spread":["Either the gap between bid and ask, or a multi-leg options position. Context matters.","A $1.00 bid and $1.10 ask has a $0.10 bid–ask spread."],
"margin":["In a broker account, collateral requirements or borrowing; in accounting, profit divided by revenue.","A margin account label does not mean every position borrows money."],
"premium":["The price of an option, normally quoted per underlying share for standard US equity contracts.","A $1.50 quote typically means $150 for a standard 100-share contract."],
"assignment":["A short option holder is selected to fulfil the contract obligation after exercise.","A standard short put may require buying 100 shares at its strike."],
"strike":["The contract price at which the underlying can be bought or sold through exercise.","A $50 put gives its holder the right to sell at $50."],
"volatility":["How much returns vary. It does not by itself specify direction.","A stock can have large daily changes while ending a month near its start."],
"expectancy":["Average outcome implied by an assumed distribution of wins, losses and costs.","80% × $100 minus 20% × $500 = −$20 before fees."],
"valuation":["An estimate of worth based on cash flows, assets or comparisons and explicit assumptions.","A range of values is more honest than one certain target."],
"intrinsic value":["For a business: estimated economic worth. For an option: immediate exercise value. These differ.","A $50 call with stock at $55 has $5 option intrinsic value per share."],
"paper trading":["Simulated trading without real execution. Fills and stress can differ from live markets.","Practise an entire opening and closing sequence before funding a strategy."],
"risk budget":["The amount a plan permits you to lose, not the amount you hope to lose.","The course uses 2% of equity as its maximum-loss practice limit."],
"limit order":["An order that sets the worst acceptable execution price. A fill is not guaranteed.","A buy limit at $1.00 cannot fill above $1.00, excluding fees."],
"dilution":["An increase in shares that can reduce each existing share’s claim on the business.","Flat company profit with more shares can reduce earnings per share."]
}};
Lab.term=(word)=>`<span class="term">${word}<button class="info" data-term="${word}" aria-label="Explain ${word}">(i)</button></span>`;
Lab.source=(label,url)=>({label,url});
Lab.quiz=(question,options,answer,explanation)=>({question,options,answer,explanation});
