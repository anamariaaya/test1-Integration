const brands = [
	{
		id: 1,
		name: 'Sports Interaction' ,
		logo: 'sportsinteraction.png',
		website: '#sportsinteraction',
		review: '#reviewsportsinteraction',
		promoTxt: '-Exclusive- Bonus up to $200'
	},
	{ 
        id: 2,
		name: 'Power Play Sports' ,
		logo: 'powerplaysports.png',
		website: '#powerplaysports',
		review: '#reviewpowerplaysports',
		promoTxt: '-Exclusive- $200 free bet'
    },
	{
		id: 3,
		name: 'For the bettor' ,
		logo: 'forthebettor.png',
		website: '#forthebettor',
		review: '#reviewforthebettor',
		promoTxt: '100% sign up Bonus up to $200'
	},
	{ 
        id: 4,
		name: 'Leo Vegas' ,
		logo: 'leovegas.png',
		website: '#leovegas',
		review: '#reviewleovegas',
		promoTxt: '-Exclusive- up to $500 free bet'
    },
	{
		id: 5,
		name: 'William Hill' ,
		logo: 'williamhill.png',
		website: '#williamhill',
		review: '#reviewwilliamhill',
		promoTxt: '100% sign up Bonus up to $200'
	},
	{
		id: 6,
		name: 'Bet365' ,
		logo: 'bet365.png',
		website: '#bet365',
		review: '#reviewbet365',
		promoTxt: '-Exclusive- Bonus up to $200'
	},
	{ 
        id: 7,
		name: '888Sport' ,
		logo: '888sport.png',
		website: '#888sport',
		review: '#review888sport',
		promoTxt: '-Exclusive- $200 free bet'
    },
	{
		id: 8,
		name: 'Betway' ,
		logo: 'betway.png',
		website: '#betway',
		review: '#reviewbetway',
		promoTxt: '100% sign up Bonus up to $200'
	},
	{ 
        id: 9,
		name: 'Spin Sports' ,
		logo: 'spinsports.png',
		website: '#spinsports',
		review: '#reviewspinsports',
		promoTxt: '-Exclusive- up to $500 free bet'
    },
	{
		id: 10,
		name: 'Bodog' ,
		logo: 'bodog.png',
		website: '#bodog',
		review: '#reviewbodog',
		promoTxt: '100% sign up Bonus up to $200'
	}
];

brands.forEach(brand=> {
	brand.promoTxt = brand.promoTxt.replace('-Exclusive-', '<b>$&</b>');
	brand.promoTxt =brand.promoTxt.replace(/\$((?:\d|\,)*\.?\d+)/, '<b>$&</b>');
	//console.log(brand.promoTxt.replace(/(\d+)/, 'hi'));
})

document.addEventListener('DOMContentLoaded', () =>{
    showInfo();
});

const sortBtn = document.querySelector('#sort');
sortBtn.addEventListener('click', sortByName);

function sortByName(){
	brands.sort((a, b) => {
		let fa = a.name.toLowerCase(),
			fb = b.name.toLowerCase();
	
		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});
	showInfo(brands);
}


const base = document.querySelector('.baseElement');
function showInfo(){
	clearHTML(),

    brands.forEach(brand =>{	
		const{id, logo, website, review, promoTxt} = brand;

		const mainBlock = document.createElement('A');
		mainBlock.classList.add('mainBlock');
		mainBlock.href = `${website}`;
		base.appendChild(mainBlock);


		const siteBlock = document.createElement('DIV');
		siteBlock.classList.add('siteBlock');
		mainBlock.appendChild(siteBlock);

		const siteInfo = document.createElement('DIV');
		siteInfo.classList.add('siteInfo');
		siteBlock.appendChild(siteInfo);

		const siteContent = document.createElement('DIV');
		siteContent.classList.add('siteContent');
		siteInfo.appendChild(siteContent);

		const siteId = document.createElement('P');
		siteId.classList.add('siteId');
		siteId.textContent = `${id}`;
		siteContent.appendChild(siteId);

		const objectLogo= document.createElement('OBJECT');
		
		const anchorHidden = document.createElement('A');
		anchorHidden.classList.add('anchorHidden');
		anchorHidden.href = `${review}`;
		objectLogo.appendChild(anchorHidden);

		const brandLogo = document.createElement('IMG');
		brandLogo.classList.add('brandLogo');
		brandLogo.src = `/build/img/${logo}`;
		objectLogo.appendChild(brandLogo);
		siteContent.appendChild(objectLogo);

		const siteContentInfo = document.createElement('DIV');
		siteContentInfo.classList.add('siteContent');
		siteInfo.appendChild(siteContentInfo);

		const stars = document.createElement('DIV');
		stars.classList.add('stars');
		siteContentInfo.appendChild(stars);

		const iconArray = [1, 2, 3, 4, 5];
		for (var i = 0; i < iconArray.length; ++i) {
			const icons = document.createElement('I');
			icons.classList.add('fa');
			icons.classList.add('fa-star');
			iconArray.fill(icons);
			stars.appendChild(iconArray[i]);
		}
		
		const objectReview= document.createElement('OBJECT');
		const reviewLink = document.createElement('A');
		reviewLink.classList.add('review');
		reviewLink.href = `${review}`;
		reviewLink.textContent = `Read review`
		objectReview.appendChild(reviewLink);
		siteContentInfo.appendChild(objectReview);

		const siteInfoPromo = document.createElement('DIV');
		siteInfoPromo.classList.add('siteInfo');
		siteBlock.appendChild(siteInfoPromo);

		const promo = document.createElement('P');
		promo.classList.add('promo');			
		promo.innerHTML = `${promoTxt}`;
		siteInfoPromo.appendChild(promo);

		const objectBtn= document.createElement('OBJECT');
		const playBtn = document.createElement('A');
		playBtn.classList.add('playNow');
		playBtn.href = `${website}`;
		playBtn.textContent = `Play Now`;

		const chevron = document.createElement('I');
		chevron.classList.add('fa');
		chevron.classList.add('fa-chevron-right');
		playBtn.appendChild(chevron);

		objectBtn.appendChild(playBtn);
		siteInfoPromo.appendChild(objectBtn);

		
    })
}

function clearHTML(){
	while(base.firstChild){
		base.removeChild(base.firstChild);
	}
}
