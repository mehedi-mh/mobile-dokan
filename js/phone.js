const loadPhone=async (searchText,isShowAll)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json();
    phones=data.data;
    console.log(data)
    displayPhones(phones,isShowAll)
}


const displayPhones=(phones,isShowAll)=>{
    // console.log(phones);
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.textContent='';
    const showAll=document.getElementById('show-all');
    if(phones.length > 9 && !isShowAll ){
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden');
    }
    if(!isShowAll){
        phones=phones.slice(0,9)
    }
    phones.forEach(phone => {
        console.log(phone);

        const phoneCard=document.createElement('div');
        phoneCard.classList=`card p-4 bg-gray-100 shadow-xl `;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body text-black">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions mt-2 justify-center">
            <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">SHOW DETAILS</button>
          </div>
        </div>
      </div>
      `;
      phoneContainer.appendChild(phoneCard);

    });
    toggleLoading(false);
}


const showDetails=(id)=>{
console.log(id)
}



const handleSearch=(isShowAll)=>{
    toggleLoading(true);
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText)
    loadPhone(searchText,isShowAll)
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

const handleShowAll=()=>{
   handleSearch(true);
}

