const loadPhone=async (searchText)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json();
    phones=data.data;
    console.log(data)
    displayPhones(phones)
}


const displayPhones=phones=>{
    // console.log(phones);
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.textContent='';
    const showAll=document.getElementById('show-all');
    if(phones.length > 9){
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden');
    }
    phones=phones.slice(0,9)
    phones.forEach(phone => {
        console.log(phone);

        const phoneCard=document.createElement('div');
        phoneCard.classList=`card p-4 bg-gray-100 shadow-xl `;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      `;
      phoneContainer.appendChild(phoneCard);

    });
    toggleLoading(false);
}


const handleSearch=()=>{
    toggleLoading(true);
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText)
    loadPhone(searchText)
}

const toggleLoading=(isLoading)=>{
    const loadingSpinner=document.getElementById('loading');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

