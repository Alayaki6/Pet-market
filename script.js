const products=[
 {name:'Calming Pet Bed',price:49.99,image:'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=85'},
 {name:'Premium Dog Collar',price:24.99,image:'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=85'},
 {name:'Interactive Cat Toy',price:19.99,image:'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=900&q=85'},
 {name:'Pet Travel Bowl',price:17.99,image:'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=900&q=85'}
];
let cart=0;const grid=document.getElementById('products');const count=document.getElementById('cartCount');
products.forEach((p,i)=>{const el=document.createElement('article');el.className='product';el.innerHTML=`<img src="${p.image}" alt="${p.name}"><div class="product-body"><h3>${p.name}</h3><p class="price">$${p.price.toFixed(2)}</p><button class="add" data-i="${i}">Add to cart</button></div>`;grid.appendChild(el)});
grid.addEventListener('click',e=>{if(e.target.matches('.add')){cart++;count.textContent=cart;e.target.textContent='Added ✓';setTimeout(()=>e.target.textContent='Add to cart',900)}});
