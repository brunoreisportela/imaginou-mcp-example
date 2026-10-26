// Node.js 22+. Public capabilities need no token; account reads use your own PAT.
const routes={capabilities:'/capabilities',account:'/me',productions:'/productions',media:'/media'};
const command=process.argv[2]||'capabilities',route=routes[command];
if(!route){console.error('Usage: node client.mjs [capabilities|account|productions|media]');process.exit(2);}
const token=process.env.IMAGINOU_API_TOKEN;
if(command!=='capabilities'&&!token){console.error('Set IMAGINOU_API_TOKEN to a personal access token from https://app.imaginou.com/#connect. Never commit it.');process.exit(2);}
try{
 const r=await fetch('https://app.imaginou.com/api/v1'+route,{headers:{Accept:'application/json',...(token?{Authorization:`Bearer ${token}`}:{})},signal:AbortSignal.timeout(30000)});
 const result=await r.json();if(!r.ok)throw Error(result.error||`HTTP ${r.status}`);
 console.log(JSON.stringify(result,null,2));
}catch(error){console.error(error.message);process.exitCode=1;}
