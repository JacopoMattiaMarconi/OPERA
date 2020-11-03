// TITOLO - MATRICOLA 18858
//MARCONI JACOPO MATTIA
// OPERA STATICA + musica di sottofondo annessa strettamente al tema
// La musica non modifica l'opera ma aiuta l'osservatore a capire il significato dell'opera
// L'opera statica rappresenta l'istante iniziale di una partita lunga milioni di anni

const X=3937; //grandezza canvas x
const Y=3937; //grandezza canvas y
let song;

function preload(){ //funzione per caricare le immagini
	song=loadSound("INZO - Overthinker.mp3"); //caricamento musica. FONTE DOREMIZONE.COM (search: INZO - OVERTHINKER)
	img5=loadImage("joel-jasmin-forestbird-P8b0bg-w_YA-unsplash.jpg"); // scia aereo. FONTE UNSPLASH.COM (search: PLANE)
	img4=loadImage("lubo-minar-qRGuuVOzsTc-unsplash.jpg"); //sfondo universo. FONTE UNSPLASH.COM (search: UNIVERSE)
	img3=loadImage("terramarte3d.png"); //immagine della creazione 3D dei due pianeti. CREATA PERSONALMENTE
	img2=loadImage("scacchiera3D.png"); //immagine della creazione 3D della scacchiera e delle pedine. CREATA PERSONALMENTE
	img=loadImage("atlas-green-MHl94ei4rKo-unsplash.jpg"); //immagine ombra del soggetto umano. FONTE UNSPLASH.COM (search: MAN SHADOW)
}

function setup(){ //funzione setup per definire grandezza canvas e immagini
	createCanvas(X,Y); //usare WEBGL quando modello in 3D
	img5.resize(X*1.4,Y);
	img4.resize(X,Y);
	img3.resize(X,Y);
	img2.resize(X+2000,Y+2000);
	img.resize(X/1.6,Y/1.6);
	song.play(); //avvio musica
}

function draw(){
//------------ INIZIO CREAZIONE DEI DUE PIANETI IN 3D (WEBGL) ------------------	
	/*
	translate(-400,-200,0); //spostamento all'interno del canvas
	directionalLight(255,255,255,100,0.1,0.2,0); //dichiarazione luce attraverso colore RGB intensità A e vettori VX VY VZ
	noStroke(); //eliminazione contorno
	ambientMaterial(0,50,150); //colore del materiale
	sphere(1000); //creazione sfera Terra

	translate(2000,-700,-2000); //spostamento all'interno del canvas
	directionalLight(255,255,255,100,0.1,0.2,0); //dichiarazione luce attraverso colore RGB intensità A e vettori VX VY VZ
	noStroke(); //eliminazione contorno
	ambientMaterial(130,0,20); //colore del materiale
	sphere(800); //creazione sfera Marte
	*/
//------------- FINE CREAZIONE DEI DUE PIANETI IN 3D (WEBGL) ------------------
	
//------------- INIZIO CREAZIONE SCACCHIERA IN 3D (WEBGL) ---------------------
	/*
	rotateX(1.3); //rotazione oggetto all'interno del canvas
	translate(-X/20*4.5,Y/20*6,0); //spostamento all'interno del canvas
	pointLight(255,200,38,50,-70,-300,300); //dichiarazione luce attraverso colore RGB intensità A e posizione X Y Z
	directionalLight(255,255,255,100,1,0,1); //dichiarazione luce attraverso colore RGB intensità A e vettori VX VY VZ
	for(let i=0; i<8; i++){	//ciclo for 8 caselle di larghezza
		for (let j=0; j<8; j++){ //ciclo for 8 casella di lunghezza
			if(i%2==0 && j%2==0){ //controllo per la creazione della scacchiera attraverso l'osservazione dell'oggetto, caselle nere e bianche intervallate
				translate(X/20,0,0); //spostamento di una casella
				ambientMaterial(255,255,255); //casella bianca
				box(X/20,X/20,X/30); //creazione casella
			}
			else if(i%2==1 && j%2==1){ //completamento controllo precedente
				translate(X/20,0,0); //spostamento di una casella
				ambientMaterial(255,255,255); //casella bianca
				box(X/20,X/20,X/30); //creazione casella
			}
			else{ //se non soddisfa i controlli precedenti
				translate(X/20,0,0); //spostamento di una casella
				ambientMaterial(91,59,45); //casella grigia
				box(X/20,X/20,X/30); //creazione casella
			}    
		}
		translate(-X/20*8,-y/20,0); //spostamento casella fine ciclo lunghezza
	}
	*/
//------------- FINE CREAZIONE SCACCHIERA IN 3D (WEBGL) ---------------------	

//------------- INIZIO CREAZIONE PEDINE IN 3D (WEBGL) -----------------------
	/*
	rotateX(1.6); //rotazione oggetto all'interno del canvas
	ambientMaterial(255,255,255); //colorazione PEDINE BIANCHE
	translate(420,200,-340); //spostamento oggetto 
	for (let i=0; i<8; i++){ //ciclo for per larghezza scacchiera e creazione prima linea pedine bianche con relativo spostamento
		translate(-200,-80,+60);
		cylinder(X/70,Y/70);
		translate(0,X/50,0);
		sphere(X/50);
		translate(205,0,-280);
	}
	translate(150,0,1780);
	for (let i=0; i<8; i++){ //ciclo for per larghezza scacchiera e creazione seconda linea pedine bianche con relativo spostamento
		if(i==7){ //controllo per "tutte le pedine tranne l'ultima"
			translate(-20,-80,+60);
			cylinder(X/70,Y/70);
			translate(0,X/50,0);
			sphere(X/50);
			translate(205,0,-280);
		}
		else{ //l'ultima pedina bianca della seconda fila viene spostata avanti di una casella
			translate(-200,-80,+60);
			cylinder(X/70,Y/70);
			translate(0,X/50,0);
			sphere(X/50);
			translate(205,0,-280);
		}
	}
	
	ambientMaterial(150,150,150); //colorazione PEDINE GRIGIE 
	translate(740,0,1780);
	for (let i=0; i<8; i++){ //ciclo for per larghezza scacchiera e creazione prima linea pedine grigie con relativo spostamento
		translate(-207,-80,+60);
		cylinder(X/70,Y/70);
		translate(0,X/50,0);
		sphere(X/50);
		translate(205,0,-280);
	}
	translate(200,0,1780);
	for (let i=0; i<8; i++){ //ciclo for per larghezza scacchiera e creazione seconda linea pedine grigie con relativo spostamento
		translate(-207,-80,+60);
		cylinder(X/70,Y/70);
		translate(0,X/50,0);
		sphere(X/50);
		translate(205,0,-280);
	}
	*/
//------------- FINE CREAZIONE PEDINE IN 3D (WEBGL) -----------------------
	
	image(img4,0,0); //sfondo universo
	
	let i=0; //variabile locale per incrementare indice di RGBA di ogni pixel 1pixel=i*4
	img3.loadPixels(); //caricamento di ogni pixel dell'immagine, creazione array pixels[]
	for (let iy=0; iy<img3.height; iy++){ //ciclo for per i minore dell'altezza in pixel dell'immagine, 1pixel=iy
		for (let ix=0; ix<img3.width; ix++){ //ciclo for per i minore della larghezza dell'immagine, 1pixel=ix
			let r=img3.pixels[i+0]; //variabile locale r che assume valore rosso da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			let g=img3.pixels[i+1]; //variabile locale g che assume valore verde da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			let b=img3.pixels[i+2]; //variabile locale b che assume valore blu da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			if(r!=255 && g!=255 && b!=255){ //controllo per togliere lo sfondo bianco dell'immagine
				img3.set(ix,iy,[r,g,b,255]); //se il pixel in questione soddisfa il controllo viene settato con i suoi colori
			}
			else{
				img3.set(ix,iy,[r,g,b,1]); //se il pixel in questione non soddisfa il controllo viene settato con i suoi colori ma trasparente
			}
			i=i+4; //incremento di i*4, ogni pixel i=i+4
		}
	}
	img3.updatePixels(); //caricamento dei pixel elaborati
	image(img3,0,-200); //caricamento immagine elaborata in posizione 0,-200
	
	i=0; //i settato uguale a 0
	img5.loadPixels(); //caricamento di ogni pixel dell'immagine, creazione array pixels[]
	for (let iy=0; iy<img5.height; iy++){ //ciclo for per i minore dell'altezza in pixel dell'immagine, 1pixel=iy
		for (let ix=0; ix<img5.width; ix++){ //ciclo for per i minore della larghezza dell'immagine, 1pixel=ix
			let r=img5.pixels[i+0]; //variabile locale r che assume valore rosso da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			let g=img5.pixels[i+1]; //variabile locale g che assume valore verde da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			let b=img5.pixels[i+2]; //variabile locale b che assume valore blu da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			if(r>50 && g>50 && b>50){ //controllo per togliere lo sfondo dell'immagine
				img5.set(ix,iy,[r+50,g,b,255]); //se il pixel in questione soddisfa il controllo viene settato con i suoi colori ma con un rosso più potente
			}
			else{
				img5.set(ix,iy,[r,g,b,1]); //se il pixel in questione non soddisfa il controllo viene settato con i suoi colori ma trasparente
			}
			i=i+4; //incremento di i*4, ogni pixel i=i+4
		}
	}
	img5.updatePixels(); //caricamento dei pixel elaborati
	image(img5,-900,400); //caricamento immagine elaborata in posizione -900,400
	
	i=0; //i settato uguale a 0
	img2.loadPixels(); //caricamento di ogni pixel dell'immagine, creazione array pixels[]
	for (iy=0; iy<img2.height; iy++){ //ciclo for per i minore dell'altezza in pixel dell'immagine, 1pixel=iy
		for (ix=0; ix<img2.width; ix++){ //ciclo for per i minore della larghezza dell'immagine, 1pixel=ix
			let r=img2.pixels[i+0]; //variabile locale r che assume valore rosso da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			let g=img2.pixels[i+1]; //variabile locale g che assume valore verde da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			let b=img2.pixels[i+2]; //variabile locale g che assume valore verde da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			if(r!=255 && g!=255 && b!=255){ //controllo per togliere lo sfondo dell'immagine
				img2.set(ix,iy,[r,g,b,255]);  //se il pixel in questione soddisfa il controllo viene settato con i suoi colori
			}
			else{
				img2.set(ix,iy,[r,g,b,1]);  //se il pixel in questione non soddisfa il controllo viene settato con i suoi colori ma trasparente
			}
			i=i+4; //incremento di i*4, ogni pixel i=i+4
		}
	}
	img2.updatePixels(); //caricamento dei pixel elaborati
	image(img2,-1000,-400); //caricamento immagine elaborata in posizione -1000,-400
	
	i=0; //i settato uguale a 0
	img.loadPixels(); //caricamento di ogni pixel dell'immagine, creazione array pixels[]
	for (iy=0; iy<img.height; iy++){ //ciclo for per i minore dell'altezza in pixel dell'immagine, 1pixel=iy
		for (ix=0; ix<img.width; ix++){ //ciclo for per i minore della larghezza dell'immagine, 1pixel=ix
			let r=img.pixels[i+0]; //variabile locale r che assume valore rosso da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			let g=img.pixels[i+1]; //variabile locale g che assume valore verde da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			let b=img.pixels[i+2]; //variabile locale b che assume valore blu da 0 a 255 del pixel in posizione ix,iy (array pixels[])
			if(r<105 && g<105 && b<105){ //controllo per togliere lo sfondo dell'immagine
				img.set(ix,iy,[r,g,b,255]); //se il pixel in questione soddisfa il controllo viene settato con i suoi colori
			}
			else{
				img.set(ix,iy,[r,g,b,2]); //se il pixel in questione non soddisfa il controllo viene settato con i suoi colori ma trasparente
			}
			i=i+4; //incremento di i*4, ogni pixel i=i+4
		}
	}
	img.updatePixels(); //caricamento dei pixel elaborati
	image(img,X/5.3,Y/2.5); //caricamento immagine elaborata in posizione x/5.3,y/2.5
	
}