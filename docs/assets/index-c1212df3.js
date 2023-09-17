(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();function s(){return Math.floor(Math.random()*42)+1}function i(){document.getElementById("btn-random").addEventListener("click",()=>{let n=s();document.querySelector(".card").innerHTML="",document.body.style.backgroundImage="none",document.body.style.height="auto",fetch(`https://rickandmortyapi.com/api/character/?page=${n}`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{r.results?r.results.forEach(t=>{const e=document.createRange().createContextualFragment(`
                    <article class="card-container">
                        <div class="image-container">
                            <img src="${t.image}" alt="character image">
                        </div>
                        <div class="data">
                            <h2 class="name">${t.name} ${t.gender=="Female"?"♀":"♂"}</h2>
                            <span class="state"><span>${t.status=="Alive"?"🟢":t.status=="unknown"?"⚪":"🔴"}</span>${t.status} - ${t.species}</span><br/><br/>
                            <b>Type</b><br/>
                            <span class="location">${t.type?t.type:"unknown"}</span><br/><br/>
                            <b>Origin</b><br/> 
                            <span class="location">${t.origin.name}</span><br/><br/>
                            <b>Location</b><br/> 
                            <span class="location">${t.location.name}</span>
                        </div>
                    </article>
                `);document.querySelector(".card").appendChild(e)}):alert("No se encontraron datos.")}).catch(r=>{alert("Ocurrió un error: "+r.message)})})}function l(){document.body.style.backgroundImage="url(./assets/RandM.jpg)",document.body.style.backgroundSize="cover"}function d(){let c=document.getElementById("search");l(),i(),document.body.style.height="100vh",c.addEventListener("keyup",n=>{if(n.keyCode===13){let r=c.value;document.querySelector(".card").innerHTML="",document.body.style.backgroundImage="none",document.body.style.height="auto",fetch(`https://rickandmortyapi.com/api/character/?name=${r}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{t.results?t.results.forEach(e=>{const a=document.createRange().createContextualFragment(`
                            <article class="card-container">
                                <div class="image-container">
                                    <img src="${e.image}" alt="character image">
                                </div>
                                <div class="data">
                                <h2 class="name">${e.name} ${e.gender=="Female"?"♀":"♂"}</h2>
                                <span class="state"><span>${e.status=="Alive"?"🟢":e.status=="unknown"?"⚪":"🔴"}</span>${e.status} - ${e.species}</span><br/><br/>
                                <b>Type</b><br/>
                                <span class="location">${e.type?e.type:"unknown"}</span><br/><br/>
                                <b>Origin</b><br/> 
                                <span class="location">${e.origin.name}</span><br/><br/>
                                <b>Location</b><br/> 
                                <span class="location">${e.location.name}</span>
                                </div>
                            </article>
                        `);document.querySelector(".card").appendChild(a)}):alert("No se encontraron datos.")}).catch(t=>{alert("Ocurrió un error: "+t.message)})}})}document.querySelector("#app").innerHTML=`
  <div>
    <h1 id="app-title">The Rick and Morty!</h1>
    <input id="search" placeholder="Search..."/> <br/>
    <button id="btn-random">Randoms...</button>
    <div class="card"></div>
  </div>
`;document.querySelector(".card");d();
