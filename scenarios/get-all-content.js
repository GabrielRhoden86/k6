import http from "k6/http";
import { Trend, Rate, Counter } from "k6/metrics";
import { sleep } from "k6";
import { check, fail } from "k6";

export let getContentDuration = new Trend('get_content_duration');
export let getContentRequests = new Counter('get_content_requests');
export let getContentFailRate = new Rate('get_content_fail_rate');
export let getContentSuccessRate = new Rate('get_content_success_rate');

export default function(){

    let response = http.get('http://127.0.0.1:8000/api/students-get');
                                                        
                                                        //exemplos de output com: k6 run index.js --vus 2 --duration 15s    2 x 15
    getContentDuration.add(response.timings.duration); //avg=421.198765 min=105.9246 med=139.4845 max=2841.6816 p(90)=1527.30486 p(95)=2183.57208
    getContentRequests.add(1);                         //97      5.374806/s
    getContentFailRate.add(response.status == 0 || response.status > 399);    //38.14% 
    getContentSuccessRate.add(response.status != 0 || response.status < 399); //100.00% ✓ 97       ✗ 0

    let dutationMsg = 'Duração máxima da requisição em '+5000/1000+' segundos foi excedida!!';

    if(!check(response,{
        'Duração limite':(r)=> r.timings.duration < 5000,
    })){
        fail(dutationMsg)
    }

    sleep(1);
}