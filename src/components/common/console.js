import React,{Component} from 'react';
import '../../asset/scss/commom.scss'

export default function Console(props) {
        const Vconsole = require('vconsole');
        const vconsole = new Vconsole();
    // 新api
    // const perfObserver = new PerformanceObserver((performanceEntryList) => {
    //     for (const performanceEntry of performanceEntryList.getEntries()) {
    //         console.log(performanceEntry.name); // 'first-paint' or 'first-contentful-paint'
    //         console.log(performanceEntry.startTime); // DOMHighResTimeStamp
    //     }
    // });
    // perfObserver.observe({ entryTypes: ["paint"] });
    setTimeout(_ => {
        let {domLoading,navigationStart} = window.performance.timing;
        let t = performance.timing;
        console.log('fp:', t.domComplete - navigationStart,'ms');
        console.log('dom:', t.domContentLoadedEventStart - navigationStart,'ms');
        console.log(performance.timing.toJSON())
    })
    window.addEventListener('DOMContentLoaded',function () {
        console.log(performance.now())

    })
    return (
        <div>
        </div>
    )
}