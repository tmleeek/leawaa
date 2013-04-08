//	HYPE.documents["index"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "index.hyperesources";
	var documentName = "index";
	var documentLoaderFilename = "index_hype_generated_script.js";
	var mainContainerID = "index_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_158 == "undefined") {
		if(typeof window.HYPE_158_DocumentsToLoad == "undefined") {
			window.HYPE_158_DocumentsToLoad = new Array();
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=158';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_158();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"0":{n:"Untitled-1.png",p:1},"1":{n:"73161-2-2.jpg",p:1},"2":{n:"222.jpeg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"10":{J:"Solid",z:"6",K:"Solid",c:235,bC:0,L:"Solid",d:41,aS:6,M:1,b:347,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aZ:0,A:"#A0A0A0",Y:"38px",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:24,E:0,F:"center",G:"#000000",aP:"pointer",w:"\u0627\u0644\u062e\u0628\u0631\u0629 \u0648\u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629",aB:[{type:1,transition:1,sceneOid:"25"}],bA:"#000000",x:"visible",I:"Solid",a:23,y:"preserve",bB:0},"8":{b:205,z:"4",K:"Solid",c:235,L:"Solid",d:41,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,F:"center",aA:[{type:1,transition:2,sceneOid:"2"}],G:"#000000",aP:"pointer",w:"<div>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0639\u0627\u0645</div>",x:"visible",I:"Solid",a:23,y:"preserve",J:"Solid"},"9":{b:276,z:"5",K:"Solid",c:235,L:"Solid",d:41,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",aA:[{type:1,transition:2,sceneOid:"3"}],G:"#000000",aP:"pointer",w:"\u0627\u0647\u062f\u0627\u0641\u0646\u0627",x:"visible",I:"Solid",a:23,y:"preserve",J:"Solid"},"11":{o:"content-box",h:"0",x:"visible",a:69,q:"100% 100%",b:16,j:"absolute",r:"inline",c:171,k:"div",z:"7",d:172},"15":{b:418,z:"8",K:"Solid",c:235,L:"Solid",d:36,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,F:"center",G:"#000000",aP:"pointer",w:"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",aB:[{type:1,transition:2,sceneOid:"4"}],x:"visible",I:"Solid",a:23,y:"preserve",J:"Solid"}},n:"Home",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"22":{aV:8,w:"<p style=\"text-align: left;\">\n\u0627\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0639\u0627\u0645/ \u0645\u062d\u0645\u062f \u0628\u0646 \u0623\u062d\u0645\u062f \u0627\u0644\u0648\u062f\u0639\u0627\u0646\u064a</p>",x:"visible",a:21,Z:"break-word",b:458,j:"absolute",r:"inline",z:"6",k:"div",aS:8,aT:8,y:"preserve",t:11,aU:8,G:"#000000"},"16":{o:"content-box",h:"1",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:300,k:"div",z:"1",d:200},"21":{aV:8,w:"<p style=\"text-align: right;\">\u0627\u0644\u062d\u0645\u062f\u0644\u0644\u0647 \u0648\u0627\u0644\u0635\u0644\u0627\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u0647 &nbsp; &nbsp;\u0648\u0628\u0639\u062f</p><p style=\"text-align: right;\">\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645 \u0648\u0631\u062d\u0645\u0629 \u0627\u0644\u0644\u0647 \u0648\u0628\u0631\u0643\u0627\u062a\u0647&nbsp;</p><p style=\"text-align: right;\">\u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0641\u064a \u0645\u062c\u0627\u0644 \u0627\u0644\u0623\u0645\u0646 \n\u0623\u0646\u0637\u0644\u0642\u062a \u0641\u0643\u0631\u0629 \u0627\u0646\u0634\u0627\u0621 \u0645\u0624\u0633\u0633\u0629 \u0623\u0645\u0646\u064a\u0629 \u0644\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u062e\u062f\u0645\u0629 \u0627\u0644\u0648\u0637\u0646 \u0627\u0644\u063a\u0627\u0644\u064a \u0639\u0644\u0649 \u0642\u0644\u0648\u0628\u0646\u0627 \n\u062c\u0645\u064a\u0639\u0627</p><p style=\"text-align: right;\">&nbsp;\u0648\u0630\u0627\u0644\u0643 \u0645\u0646 \u062e\u0644\u0627\u0644 \u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0623\u0645\u0646\u064a\u0629 \u0644\u0644\u0645\u0646\u0634\u0626\u0627\u062a \u0627\u0644\u062d\u0643\u0648\u0645\u064a\u0629 \u0648\u0627\u0644\u062e\u0627\u0635\u0629</p><p style=\"text-align: right;\">&nbsp;\u0648\u0642\u062f \n\u0635\u062f\u0631\u062a \u0645\u0648\u0627\u0641\u0642\u0629 \u0645\u0642\u0627\u0645 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629 \u0645\u0645\u062b\u0644\u0629 \u0641\u064a \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0639\u0627\u0645 \u0639\u0644\u0649 \u0623\u0646\u0634\u0627\u0621 \u0645\u0624\u0633\u0633\u0629 \n\u0627\u0644\u0644\u0648\u0627\u0621 \u0627\u0644\u0623\u0645\u0646\u064a \u0644\u0644\u062d\u0631\u0627\u0633\u0627\u062a \u0627\u0644\u0623\u0645\u0646\u064a\u0629 \u0627\u0644\u0645\u062f\u0646\u064a\u0629 \u0627\u0644\u062e\u0627\u0635\u0629&nbsp;</p><p style=\"text-align: right;\">\u0648\u0642\u062f \u062a\u0645 \u0648\u0636\u0639 \u0627\u0644\u0623\u0647\u062f\u0627\u0641 \n\u0648\u0627\u0644\u0623\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0647 \u0641\u064a \u0627\u0646\u062a\u0647\u0627\u062c \u0633\u064a\u0627\u0633\u0629 \u0648\u0645\u0631\u0627\u0642\u0628\u0629 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0623\u0645\u0646\u064a\u0629 \n\u0628\u062d\u064a\u062b \u062a\u0643\u0648\u0646 \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u064a\u0644 \u0646\u0635\u0628 \u0623\u0639\u064a\u0646\u0646\u0627 \u0648\u063a\u0627\u064a\u062a\u0646\u0627 \u062e\u0635\u0648\u0635\u0627 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u062c\u0627\u0644 \u0627\u0644\u062d\u064a\u0648\u064a \n\u0648\u0627\u0644\u0645\u0647\u0645 \u060c \u0648\u0641\u064a \u0627\u0644\u062e\u062a\u0627\u0645&nbsp;<span style=\"text-align: right; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); \">\u0623\u062f\u0639\u0648 \u0627\u0644\u0645\u0648\u0644\u0649 \u0639\u0632 \u0648\u062c\u0644 \u0623\u0646 \u064a\u062f\u064a\u0645 \u0639\u0644\u064a\u0646\u0627 \u0646\u0639\u0645\u0629 \u0627\u0644\u0623\u0645\u0646 \u0648\u0627\u0644\u0623\u0645\u0627\u0646</span></p><p style=\"text-align: right;\">\n\u0641\u064a \u0638\u0644 \u062d\u0643\u0648\u0645\u062a\u0646\u0627 \u0627\u0644\u0631\u0634\u064a\u062f\u0629 \u0628\u0642\u064a\u0627\u062f\u0629 \u062e\u0627\u062f\u0645 \u0627\u0644\u062d\u0631\u0645\u064a\u0646 \u0627\u0644\u0634\u0631\u064a\u0641\u064a\u0646 \u0648\u0648\u0644\u064a \u0639\u0647\u062f\u0629 \u0627\u0644\u0623\u0645\u064a\u0646 \u062d\u0641\u0638\u0647\u0645 \u0627\u0644\u0644\u0647</p>\n<p style=\"text-align: left;\">\n</p>",x:"visible",a:13,Z:"break-word",b:209,j:"absolute",r:"inline",c:258,z:"5",aS:8,aT:8,d:200,k:"div",t:11,y:"preserve",aU:8,G:"#000000",v:"bold"},"28":{b:469,z:"7",K:"Solid",c:67,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:14,F:"center",aA:[{type:1,transition:2,sceneOid:"1"}],G:"#000000",aP:"pointer",w:"\u0639\u0648\u062f\u0629 \u0644\u0644\u0631\u0626\u064a\u0633\u064a\u0629",x:"visible",I:"Solid",a:203,y:"preserve",J:"Solid"},"18":{aV:8,w:"<h1 style=\"text-align: center;\">\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0631\u062d\u064a\u0645</h1>",x:"visible",a:81,Z:"break-word",b:183,j:"absolute",r:"inline",z:"2",k:"div",aS:8,aT:8,y:"preserve",t:9,aU:8,G:"#000000",v:"normal"}},n:"GM",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"2"},{x:2,p:"600px",c:"#FFFFFF",v:{"29":{aV:8,w:"<br>",x:"visible",a:274,Z:"break-word",b:405,j:"absolute",r:"inline",z:"2",k:"div",aS:8,aT:8,y:"preserve",t:16,aU:8,G:"#000000"},"30":{b:383,z:"3",K:"Solid",c:187,L:"Solid",d:42,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,F:"center",G:"#000000",aP:"pointer",w:"\u0639\u0648\u062f\u0629 \u0644\u0644\u0631\u0626\u064a\u0633\u064a\u0629",aB:[{type:1,transition:2,sceneOid:"1"}],x:"visible",I:"Solid",a:57,y:"preserve",J:"Solid"},"23":{aV:8,w:"<h1>\u0627\u0644\u0647\u062f\u0641 \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0623\u0645\u0646\u064a\u0629&nbsp;</h1>\n<p>\u0647\u062f\u0641\u0646\u0627 \u0645\u0646 \u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0623\u0645\u0646\u064a\u0629 \u0623\u0648\u0644\u0627\u064b \u0633\u0644\u0627\u0645\u0629 \u0648\u0623\u0645\u0646 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0627\u0644\u0645\u0648\u0643\u0644\u0629 \u0644\u0646\u0627 \n\u062d\u0631\u0627\u0633\u062a\u0647\u0627 \u0648\u0627\u0644\u0645\u062a\u0639\u0627\u0642\u062f \u0645\u0639\u0647\u0627 \u0644\u062d\u0645\u0627\u064a\u062a\u0647\u0627 \u0648\u062a\u0630\u0644\u064a\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u0635\u0639\u0627\u0628 \u0645\u0647\u0645\u0627 \u0628\u0644\u063a\u062a \u0640 \u0625\u0646 \u0634\u0627\u0621 \n\u0627\u0644\u0644\u0647 \u0640 \u0644\u0644\u0645\u062d\u0627\u0641\u0638\u0629 \u0639\u0644\u064a\u0647\u0627 \u0648\u0639\u062f\u0645 \u0627\u0644\u0639\u0628\u062b \u0628\u0623\u0635\u0648\u0644\u0647\u0627 \u0633\u0648\u0627\u0621 \u0643\u0627\u0646\u062a \u0627\u0644\u062b\u0627\u0628\u062a\u0629 \u0645\u0646\u0647\u0627 \u0623\u0648&nbsp; \n\u0627\u0644\u0645\u0646\u0642\u0648\u0644\u0629 \u060c \u0645\u0645\u0627 \u064a\u062f\u0639\u0645 \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0644\u0644\u0648\u0637\u0646 \u0648\u0627\u0644\u0645\u0648\u0627\u0637\u0646 \u0639\u0644\u0649 \u0627\u0644\u0633\u0648\u0627\u0621 \u0648\u0630\u0644\u0643 \u0645\u0646 \n\u062e\u0644\u0627\u0644 \u0631\u062c\u0627\u0644 \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0630\u064a\u0646 \u0633\u064a\u062a\u0645 \u062a\u0643\u0644\u064a\u0641\u0647\u0645 \u0628\u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u0630\u064a\u0646 \u064a\u062a\u0645\u062a\u0639\u0648\u0646 \u0628\u0645\u0633\u062a\u0648\u0649 \u0631\u0641\u064a\u0639 \n\u062e\u0644\u0627\u0644 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0623\u0645\u0646\u064a \u0648\u0627\u0644\u0631\u0648\u062d \u0627\u0644\u0645\u0639\u0646\u0648\u064a\u0629 \u0627\u0644\u0639\u0627\u0644\u064a\u0629 \u060c \u0648\u0633\u064a\u062a\u0645 \u0630\u0644\u0643 \u062a\u062d\u062a \u0625\u0634\u0631\u0627\u0641 \n\u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0631\u0624\u0633\u0627\u0621 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u064a\u0646 \u0648\u0627\u0644\u0630\u064a\u0646 \u064a\u062e\u0636\u0639\u0648\u0646 \u0628\u062f\u0648\u0631\u0647\u0645 \u0644\u0644\u0631\u0642\u0627\u0628\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0645\u0634\u0631\u0641\u064a\u0646 \n\u0648\u0627\u0644\u0645\u0631\u0627\u0642\u0628\u064a\u0646 \u0648\u0643\u0630\u0644\u0643 \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0633\u062a\u0645\u0631\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u062f\u0648\u0631\u064a\u0627\u062a \u0627\u0644\u0623\u0645\u0646\u064a\u0629 \u0627\u0644\u0645\u062c\u0647\u0632\u0629 \n\u0644\u062a\u0641\u0642\u062f \u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0623\u0645\u0646\u064a\u0629 \u0644\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u062a\u0644\u0628\u064a\u0629 \u0643\u0627\u0641\u0629 \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0647\u0645 \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \n\u0627\u0644\u0630\u064a \u064a\u0631\u0636\u064a \u0627\u0644\u0639\u0645\u064a\u0644 \u062d\u064a\u062b \u0623\u0646\u0647 \u0645\u0646 \u0623\u0648\u0644\u0648\u064a\u0627\u062a \u0627\u0647\u062a\u0645\u0627\u0645\u0627\u062a\u0646\u0627</p>",x:"visible",a:4,Z:"break-word",b:0,j:"absolute",r:"inline",c:275,z:"1",aS:8,aT:8,d:476,k:"div",F:"right",t:16,aU:8,G:"#000000",y:"preserve"}},n:"goals",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"3"},{x:3,p:"600px",c:"#FFFFFF",v:{"13":{aV:8,w:"",x:"visible",a:151,Z:"break-word",b:425,j:"absolute",r:"inline",c:191,z:"1",aS:8,aT:8,d:233,k:"div",t:48,y:"preserve",aU:8,G:"#000000"},"32":{b:369,z:"4",K:"Solid",c:187,L:"Solid",d:42,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,F:"center",G:"#000000",aP:"pointer",w:"\u0639\u0648\u062f\u0629 \u0644\u0644\u0631\u0626\u064a\u0633\u064a\u0629",aB:[{type:1,transition:2,sceneOid:"1"}],x:"visible",I:"Solid",a:55,y:"preserve",J:"Solid"},"27":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:300,k:"div",z:"3",d:129},"14":{aV:8,w:"<p>\u0647\u0627\u062a\u0641 : 026711139</p>\n<p>\u0641\u0627\u0643\u0633 : 026744423</p>\n<p><span style=\"color: rgb(0, 0, 0); text-align: center; background-color: rgb(255, 255, 255); \">\u062c\u0648\u0627\u0644 : 0507333200</span><br></p><p><br></p>",x:"visible",a:-55,Z:"break-word",b:145,j:"absolute",r:"inline",c:406,z:"2",aS:8,aT:8,d:313,k:"div",F:"center",t:24,aU:8,G:"#000000",y:"preserve"}},n:"call us",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"4"},{x:4,p:"600px",c:"#FFFFFF",v:{"26":{aV:8,w:"\u062a\u0633\u0639\u0649 \u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0644\u064a\u0627 \u0645\u0645\u062b\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0639\u0627\u0645 \u0648\u0645\u0646 \u062e\u0644\u0627\u0644 \u062e\u0628\u0631\u062a\u0647 \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0641\u064a \u0645\u062c\u0627\u0644\n \u0627\u062f\u0627\u0631\u0629 \u062a\u0642\u062f\u064a\u0645 \u062e\u062f\u0645\u0629 \u0627\u0644\u062d\u0631\u0627\u0633\u0627\u062a \u0627\u0644\u0627\u0645\u0646\u064a\u0629 \u0644\u0639\u062f\u062f \u0645\u0646 \u0627\u0644\u0628\u0646\u0648\u0643 \u0648\u0645\u0646\u0647\u0627 \u2013 \u0645\u0635\u0631\u0641 \u0627\u0644\u0631\u0627\u062c\u062d\u064a \n\u2013\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0627\u0647\u0644\u064a \u0627\u0644\u062a\u062c\u0627\u0631\u064a \u2013 \u0628\u0646\u0643 \u0627\u0644\u0631\u064a\u0627\u0636 \u2013 \u0628\u0646\u0643 \u0633\u0627\u0645\u0628\u0627- \u0628\u0646\u0643 \u0627\u0644\u0628\u0644\u0627\u062f \u2013 \u0628\u0646\u0643 \u0633\u0627\u0628 \u2013 \n\u0628\u0646\u0643 \u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u2013 \u0628\u0646\u0643 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u2013 \u0628\u0646\u0643 \u0627\u0644\u0623\u0646\u0645\u0627\u0621 \u2013 \u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0641\u0631\u0646\u0633\u064a&nbsp;<div><br>\n\u0648\u0643\u0630\u0627\u0644\u0643 \u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0627\u0645\u0646\u064a\u0629 \u0644\u0639\u062f\u062f \u0645\u0646 \u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0627\u0644\u062d\u0643\u0648\u0645\u064a\u0629 \n\u0648\u0645\u0646\u0647\u0627 \u2013 \u0647\u064a\u0626\u0629 \u0627\u0644\u0645\u062f\u0646 \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u0629 \u2013 \u0648\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u062a\u062c\u0627\u0631\u064a \u2013 \u0648\u0628\u0631\u062c \u0627\u0644\u0641\u064a\u0635\u0644\u064a\u0629 \n\u2013\u0648\u0639\u062f\u062f \u0645\u0646 \u0627\u0644\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0648\u0630\u0627\u0644\u0643 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0639\u0645\u0644 \u0641\u064a \u0639\u062f\u0629 \u0634\u0631\u0643\u0627\u062a&nbsp;</div><div><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); text-align: right; \">\u0648\u0645\u0624\u0633\u0633\u0627\u062a \u0623\u0645\u0646\u064a\u0629 \n\u0633\u0628\u0642\u062a\u0646\u0627 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u062c\u0627\u0644&nbsp;</span><br></div><div><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); text-align: right; \"><br></span></div><div>\n\u0648\u062a\u0645 \u0627\u0644\u0623\u0633\u062a\u0641\u0627\u062f\u0629 \u0645\u0646 \u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u0644\u0648\u0636\u0639 \u0625\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0647 \u0641\u064a \u0625\u0646\u062a\u0647\u0627\u062c \u0633\u064a\u0627\u0633\u0629 \u0645\u0631\u0627\u0642\u0628\u0629 \n\u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u0642\u062f\u0645\u0647\u0627 \u0631\u062c\u0627\u0644 \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u062a\u0627\u0628\u0639\u064a\u0646 \u0644\u0645\u0624\u0633\u0633\u062a\u0646\u0627 \u0648 \n\u0627\u0644\u0630\u064a\u0646 \u0647\u0645 \u0628\u0645\u062b\u0627\u0628\u0629 \u0633\u0641\u0631\u0627\u0621 \u0644\u0644\u0645\u0624\u0633\u0633\u0629 , \u0648\u0627\u0644\u0625\u0634\u0631\u0627\u0641 \u0639\u0644\u064a\u0647\u0645 \u0639\u0646 \u0642\u0631\u0628 \u0648\u0648\u0636\u0639 \u0631\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u064a\u0644 \n\u0648\u062a\u0648\u0638\u064a\u0641 \u0645\u0637\u0627\u0644\u0628\u0647 \u0643\u062e\u062f\u0645\u0627\u062a \u0645\u0645\u064a\u0632\u0629 \u0646\u0642\u0648\u0645 \u0628\u062a\u0648\u0641\u064a\u0631\u0647\u0627 \u0628\u062d\u064a\u062b \u062a\u0643\u0648\u0646 \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0645\u064a\u0632\u0629 \u0644\u0644\u0639\u0645\u064a\u0644\n \u0646\u0635\u0628 \u0623\u0639\u064a\u0646\u0646\u0627 \u0648\u063a\u0627\u064a\u062a\u0646\u0627 \u0627\u0644\u0648\u062d\u064a\u062f\u0629 \u062e\u0635\u0648\u0635\u0627\u064e \u0641\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u062c\u0627\u0644 \u0627\u0644\u062d\u064a\u0648\u064a \u0648\u0627\u0644\u0645\u0647\u0645<br></div><div><br></div>",x:"visible",a:27,Z:"break-word",b:26,j:"absolute",r:"inline",c:241,z:"1",aS:8,aT:8,d:632,k:"div",F:"right",t:14,aU:8,G:"#000000",y:"preserve"},"33":{b:400,z:"2",K:"Solid",c:187,L:"Solid",d:42,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,F:"center",G:"#000000",aP:"pointer",w:"\u0639\u0648\u062f\u0629 \u0644\u0644\u0631\u0626\u064a\u0633\u064a\u0629",aB:[{type:1,transition:2,sceneOid:"1"}],x:"visible",I:"Solid",a:55,y:"preserve",J:"Solid"}},n:"expert",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"25"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

