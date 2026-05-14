const lights={
    red:document.querySelector('.red'),
    yellow:document.querySelector('.yellow'),
    green:document.querySelector('.green')
};

const sequence=[
    {light:'red',duration:3000},
    {light:'yellow',duration:1500},
    {light:'green',duration:3000},
    {light:'yellow',duration:1500}
];

let current=0;

function clearLights(){
    Object.values(lights).forEach(light=>{
        light.classList.remove('active');
    });
}

function runTraffic(){
    clearLights();

    let active=sequence[current];
    lights[active.light].classList.add('active');

    setTimeout(()=>{
        current=(current+1)%sequence.length;
        runTraffic();
    },active.duration);
}

runTraffic();