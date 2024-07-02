import GetContent from "./scenarios/get-content.js";
import GetAllContent from "./scenarios/get-all-content.js";
import PostContent from "./scenarios/post-content.js";
import { group, sleep } from "k6";

export default function(){
group('GETCONTENT - Controller Get Content',()=>{
    GetContent();
 })
 sleep(1)

 group('GETALLCONTENT - Controller All Content',()=>{
    GetAllContent();
 })
 sleep(1)

 group('POSTCONTENT - Controller Post Content',()=>{
    PostContent();
 })
 sleep(1)
}

//k6 run index.js --vus 5 --duration 10s    
//k6 run scenarios/post-content.js --vus 5 --duration 10s    executando em um scenário especifíco