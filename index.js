import GetContent from "./scenarios/get-content.js";
import { group, sleep } from "k6";

export default function(){
group('GETCONTENT - Controller Content',()=>{
    GetContent();
 })
 sleep(2)
}

//k6 run index.js --vus 2 --duration 15s