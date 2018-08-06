export const typeScales = [
    {title: 'Minor Second', ratio: 1.067},
    {title: 'Major Second', ratio: 1.125},
    {title: 'Minor Third', ratio: 1.2},
    {title: 'Major Third', ratio: 1.25},
    {title: 'Perfect Fourth', ratio: 1.333},
    {title: 'Augmented Fourth', ratio: 1.414},
    {title: 'Perfect Fifth', ratio: 1.5},
    {title: 'Golden Ratio', ratio: 1.618},
];

export function fontSizes(baseFontSize, ratio){
    const ret = [];
    for(let i=2;i>0;i--){
        ret.push(1/(ratio**i));
    }
    ret.push(1);
    for(let i=1;i<6;i++){
        ret.push(ratio**i);
    }

    return ret.map((multiplier)=>{
        return {
            base: multiplier,
            full: multiplier * baseFontSize, 
        };
    }).reverse();
};