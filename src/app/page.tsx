'use client';
import {useState} from 'react';
import {resources} from '../data/resources';
export default function Home(){
 const [search,setSearch]=useState(''); const [category,setCategory]=useState('All');
 const filtered=resources.filter(r=>(category==='All'||r.category===category)&&[r.name,r.category,r.borough,r.description].some(s=>s.toLowerCase().includes(search.trim().toLowerCase())));
 return <main><header><h1>AccessLink</h1><p>Find helpful community resources in New York City.</p><p className="note">Milestone 1 prototype — illustrative listings, not verified providers.</p></header>
 <section className="filters" aria-label="Search and filter resources"><div><label htmlFor="search">Search resources</label><input id="search" type="search" placeholder="Try healthcare or Queens" value={search} onChange={e=>setSearch(e.target.value)}/></div><div><label htmlFor="category">Category</label><select id="category" value={category} onChange={e=>setCategory(e.target.value)}><option value="All">All categories</option><option value="Employment">Employment</option><option value="Healthcare">Healthcare</option><option value="Legal">Legal assistance</option></select></div></section>
 <section aria-labelledby="results"><h2 id="results">Available resources</h2><p role="status" aria-live="polite">{filtered.length} matching {filtered.length===1?'resource':'resources'}</p><div className="cards">{filtered.map(r=><article className="card" key={r.id}><h3>{r.name}</h3><p className="meta">{r.category} · {r.borough}</p><p>{r.description}</p></article>)}</div>{filtered.length===0&&<p>No resources match your search. Try a different keyword or category.</p>}</section><p className="note-bottom">Verified NYC resources and English, Spanish, and Albanian translations are planned for later milestones.</p></main>;
}
