function Cal_function(){

	

           //document.getElementById('annualBasic').innerHTML = fp;

		
		var calcCTC = function(InputOTE,inputcountry,InputBand ,InputselectedPlan){


	// var InputOTEvalue = document.getElementById('OTE').value;


	// var a = document.getElementById("country").selectedIndex;
	// var selectedCountry =document.getElementById('country')[a].value;

	// var b = document.getElementById("sub_band").selectedIndex;
	// var selectedSubBand = document.getElementById('sub_band')[b].value;

	// var c = document.getElementById("payPlan").selectedIndex;
	// var selectedPayplan = document.getElementById('payPlan')[c].value;

	var InputOTEvalue = InputOTE;
	var selectedPayplan = InputselectedPlan;
	var selectedCountry = inputcountry;
	var selectedSubBand = InputBand;

	var fp=0;
	var variablePayPerctange =0;
	var annualBonusPlanper = 0;
	var salesincentivePlanper =0;
	var targetlinkedvarPayper =0;



	if(selectedCountry == 'SaudiArabia' || selectedCountry == 'UAE'   ){



		if(selectedPayplan =='ABP' && ( (selectedSubBand == 'B3_1') || (selectedSubBand == 'B3_2') ) ){

			 fp = parseFloat((90.909  * InputOTEvalue)/100);
			 variablePayPerctange = 10;
			
			 annualBonusPlanper = 10;

		}


		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B3_1') || (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((83.3334 * InputOTEvalue)/100);
			 variablePayPerctange = 20;

			 annualBonusPlanper = 20/2;
			 salesincentivePlanper = 20/2;
		}

		
		

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B3_1') || (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((50 * InputOTEvalue)/100);

			 variablePayPerctange = 100;
			 salesincentivePlanper = 100;
		}


		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B3_1') || (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((59.8802 * InputOTEvalue)/100);
			 variablePayPerctange = 67;
			 salesincentivePlanper = 67;
		}


		else if(selectedPayplan =='ABP' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ){

			 fp = parseFloat((95.238 * InputOTEvalue)/100);
			 variablePayPerctange = 5;
			 annualBonusPlanper = 5;

		}


		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((90.909 * InputOTEvalue)/100);
			 variablePayPerctange = 10;
			 annualBonusPlanper = 10/2;
			 salesincentivePlanper = 10/2;
 
		}


		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((50 * InputOTEvalue)/100);
			 variablePayPerctange = 100;
			 salesincentivePlanper = 100;

		}


		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((59.8802 * InputOTEvalue)/100);
			 variablePayPerctange = 67;
			 salesincentivePlanper = 67;
		}

		else if(selectedPayplan =='ABP' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ){

			 fp = parseFloat((86.9565 * InputOTEvalue)/100);
			 variablePayPerctange = 15;
			 annualBonusPlanper = 15;
		}


		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange = 25;

			 annualBonusPlanper = 25/2;
			 salesincentivePlanper = 25/2;
		}


		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((50 * InputOTEvalue)/100);
			 variablePayPerctange =100;
			 salesincentivePlanper = 100;
		}

		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((59.88016666666667 * InputOTEvalue)/100);
			 variablePayPerctange =100;

			 salesincentivePlanper = 100;
		}

		else if(selectedPayplan =='ABP' && ( (selectedSubBand == 'B5_1')  ) ){

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange = 25;
			 annualBonusPlanper = 25;
		}

		
		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B5_1')  ) ) {

			 fp = parseFloat((76.923 * InputOTEvalue)/100);
			 variablePayPerctange = 30;

			 annualBonusPlanper = 30/2;
			 salesincentivePlanper = 30/2;
		}


		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B5_1')  ) ) {

			 fp = parseFloat((50 * InputOTEvalue)/100);
			 variablePayPerctange = 100;
			 salesincentivePlanper = 100;
		}


		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B5_1')  ) ) {

			 fp = parseFloat((59.8802 * InputOTEvalue)/100);
			 variablePayPerctange =67;
			 salesincentivePlanper = 67;
		}


		else if(selectedPayplan =='ABP' && ( (selectedSubBand == 'B6_1')  ) ){

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange = 25;
			 annualBonusPlanper = 25;
		}


		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B6_1')  ) ) {

			 fp = parseFloat((76.923 * InputOTEvalue)/100);
			 variablePayPerctange = 30;

			 annualBonusPlanper = 30/2;
			 salesincentivePlanper = 30/2;
		}


		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B6_1')  ) ) {

			 fp = parseFloat((50 * InputOTEvalue)/100);
			 variablePayPerctange = 100;

			 salesincentivePlanper = 100;
		}

		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B6_1')  ) ) {

			 fp = parseFloat((59.8802 * InputOTEvalue)/100);

			 variablePayPerctange =67;

			 salesincentivePlanper = 67;
		}


		else if(selectedPayplan =='ABP' && ( (selectedSubBand == 'B7_1')  ) ){

			 fp = parseFloat((76.923 * InputOTEvalue)/100);
			 variablePayPerctange = 30 ;
			 annualBonusPlanper = 30;
		}


		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B7_1')  ) ) {

			 fp = parseFloat((71.4285 * InputOTEvalue)/100);
			 variablePayPerctange = 40;

			 annualBonusPlanper = 40/2;
			 salesincentivePlanper = 40/2;
		}

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B7_1')  ) ) {

			 fp = parseFloat((50 * InputOTEvalue)/100);
			 variablePayPerctange = 100;

			 salesincentivePlanper = 100;
		}

		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B7_1')  ) ) {

			 fp = parseFloat((59.8802 * InputOTEvalue)/100);
			 variablePayPerctange = 67;

			 salesincentivePlanper = 67;
		}


		else if(selectedPayplan =='ABP' && ( (selectedSubBand == 'B8_1')  ) ){

			 fp = parseFloat((71.4285 * InputOTEvalue)/100);
			 variablePayPerctange = 40;
			 annualBonusPlanper = 40;
		}


		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B8_1')  ) ) {

			 fp = parseFloat(( 66.6666 * InputOTEvalue)/100);
			 variablePayPerctange = 50;

			 annualBonusPlanper = 50/2;
			 salesincentivePlanper = 50/2;
		}

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B8_1')  ) ) {

			 fp = parseFloat((50 * InputOTEvalue)/100);
			 variablePayPerctange = 100;

			 salesincentivePlanper = 100;
		}


		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B8_1')  ) ) {

			 fp = parseFloat((59.8802 * InputOTEvalue)/100);
			 variablePayPerctange =67;

			 salesincentivePlanper = 67;
		}


		else if(selectedPayplan =='ABP' && ( (selectedSubBand == 'B1_1')  ) ){

			 fp = parseFloat((95.238 * InputOTEvalue)/100);
			 variablePayPerctange = 5;
			 annualBonusPlanper = 5;
		}


		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B1_1')  ) ) {

			 fp = parseFloat(( 90.909 * InputOTEvalue)/100);
			 variablePayPerctange = 10;

			 annualBonusPlanper = 10/2;
			 salesincentivePlanper = 10/2;
		}


		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B1_1')  ) ) {

			 fp = parseFloat((50 * InputOTEvalue)/100);
			 variablePayPerctange = 100;

			 salesincentivePlanper = 100;	
			 	}

		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B1_1')  ) ) {

			 fp = parseFloat((59.8802 * InputOTEvalue)/100);

			 variablePayPerctange = 67;

			 salesincentivePlanper = 67;
		}

		else {
			alert('applicable only for India and Sri Lanka');

			
		}
        

	}



	else if (selectedCountry == 'INDIA' || selectedCountry =='SriLanka' ) {


		// for grade B0-1 & B0-2

		// if( selectedSubBand =='B0_1' || selectedSubBand =='B0_2' ||  )
		// {

		// }

		if(selectedPayplan =='ABP' && ( (selectedSubBand == 'B1_1') ) ){

			fp = parseFloat((95 * InputOTEvalue)/100);
			variablePayPerctange = 5;
			annualBonusPlanper = 5;
			// salesincentivePlanper = 0;


		}

		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B1_1')  ) ) {

			 fp = parseFloat((90 * InputOTEvalue)/100);
			 variablePayPerctange=10;
			 annualBonusPlanper = 10/2;
			 salesincentivePlanper = 10/2;
		}


		else if (selectedPayplan =='PartSIP' && ( (selectedSubBand == 'B1_1')  ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange=0;
			 // annualBonusPlanper = 0;
			 // salesincentivePlanper = 0;
		}

		else if (selectedPayplan =='TLVP' && ( (selectedSubBand == 'B1_1') ) ) {

			 fp = parseFloat((95 * InputOTEvalue)/100);
			 variablePayPerctange=5;

			 // annualBonusPlanper = 0;
			 // salesincentivePlanper = 0;
			 targetlinkedvarPayper = 5;

		}

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B1_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange = 25;
			 salesincentivePlanper = 25;

		}
		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B1_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange =0;

		}


		else if (selectedPayplan =='FullSIP_GCS' && ( (selectedSubBand == 'B1_1')  ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange = 25;
			 salesincentivePlanper = 25;
		}


		else if (selectedPayplan =='FullSIP_GMS' && ( (selectedSubBand == 'B1_1')  ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);

			 variablePayPerctange=25;
			 salesincentivePlanper = 25;
		}


		else if (selectedPayplan =='FullSIP_GVS' && ( (selectedSubBand == 'B1_1')  ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange=25;
			 salesincentivePlanper =25;
		}


		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B1_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper =25;
		}


		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B1_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
		}


		else if (selectedPayplan =='ABP' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((90 * InputOTEvalue)/100);
			 variablePayPerctange= 10;
			 annualBonusPlanper = 10;

		}
		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((90 * InputOTEvalue)/100);
			 variablePayPerctange= 10;
			 annualBonusPlanper =10/2;
			 salesincentivePlanper =10/2;
		}

		else if (selectedPayplan =='PartSIP' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;

		}

		else if (selectedPayplan =='TLVP' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((90 * InputOTEvalue)/100);
			 variablePayPerctange= 10;
			 targetlinkedvarPayper=10;

		}
		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper=25;
		}
		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GCS' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper = 25;
		}
		else if (selectedPayplan =='FullSIP_GMS' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper =25;

		}
		else if (selectedPayplan =='FullSIP_GVS' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper= 25;
		}
		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B2_1') || (selectedSubBand == 'B2_2') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper =25;
		}


		else if (selectedPayplan =='ABP' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((88 * InputOTEvalue)/100);
			 variablePayPerctange = 12;
			 annualBonusPlanper =12;
		}

		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((88 * InputOTEvalue)/100);
			 variablePayPerctange= 12;
			 annualBonusPlanper =12/2;
			 salesincentivePlanper =12/2;
		}

		else if (selectedPayplan =='PartSIP' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}

		else if (selectedPayplan =='TLVP' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((88 * InputOTEvalue)/100);
			 variablePayPerctange= 12;
			 targetlinkedvarPayper = 12;
		}

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper = 25;

		}
		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;

		}
		else if (selectedPayplan =='FullSIP_GCS' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper = 25;
		}
		else if (selectedPayplan =='FullSIP_GMS' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper =25;
		}
		else if (selectedPayplan =='FullSIP_GVS' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper =25;
		}
		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B3_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 salesincentivePlanper =25;
		}
		else if (selectedPayplan =='ABP' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((85 * InputOTEvalue)/100);
			 variablePayPerctange= 15;
			 annualBonusPlanper =15;
		}

		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((88 * InputOTEvalue)/100);
			 variablePayPerctange= 15;
			 annualBonusPlanper = 15/2;
			 salesincentivePlanper =15/2;
		}

		else if (selectedPayplan =='PartSIP' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}

		else if (selectedPayplan =='TLVP' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((85 * InputOTEvalue)/100);
			 variablePayPerctange= 15;
			 targetlinkedvarPayper = 15; 
		}

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper = 30;

		}
		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;

		}
		else if (selectedPayplan =='FullSIP_GCS' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper = 30; 
		}
		else if (selectedPayplan =='FullSIP_GMS' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper =30;
		}
		else if (selectedPayplan =='FullSIP_GVS' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper = 25;
		}
		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B3_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper =30;
		}

		else if (selectedPayplan =='ABP' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((85 * InputOTEvalue)/100);
			 variablePayPerctange= 15;
			 annualBonusPlanper = 15;
		}
		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((85 * InputOTEvalue)/100);
			 variablePayPerctange= 15;
			 annualBonusPlanper =15/2;
			 salesincentivePlanper =15/2;

		}
		else if (selectedPayplan =='PartSIP' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((85 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='TLVP' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((85 * InputOTEvalue)/100);
			 variablePayPerctange= 15;
			 targetlinkedvarPayper = 15;
		}
		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper =30;
		}
		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GCS' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper = 30;
		}
		else if (selectedPayplan =='FullSIP_GMS' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper =30;
		}
		else if (selectedPayplan =='FullSIP_GVS' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper =30;

		}
		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B4_1') || (selectedSubBand == 'B4_2') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper =30;
		}

		else if (selectedPayplan =='ABP' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange= 20;
			 annualBonusPlanper =20;
		}

		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange= 20;
			 annualBonusPlanper =20/2;
			 salesincentivePlanper = 20/2
		}

		else if (selectedPayplan =='PartSIP' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;


		}

		else if (selectedPayplan =='TLVP' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange= 20;
			 targetlinkedvarPayper = 20;
		}

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;

		}
		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GCS' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GMS' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GVS' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper = 30;
		}
		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B5_1') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper = 30;
		}


		else if (selectedPayplan =='ABP' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange= 20;
			 annualBonusPlanper = 20;
		}

		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange= 20;
			 annualBonusPlanper = 20/2;
			 salesincentivePlanper = 20/2;
		}

		else if (selectedPayplan =='PartSIP' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
		}

		else if (selectedPayplan =='TLVP' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange= 20;
			 targetlinkedvarPayper= 20;
		}

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GCS' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GMS' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GVS' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper = 30;
		}
		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B6_1') ) ) {

			 fp = parseFloat((70 * InputOTEvalue)/100);
			 variablePayPerctange= 30;
			 salesincentivePlanper = 30;
		}



		else if (selectedPayplan =='ABP' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange= 20;
			 annualBonusPlanper = 20;
		}

		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 annualBonusPlanper = 25/2;
			 salesincentivePlanper = 25/2;
		}

		else if (selectedPayplan =='PartSIP' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((65 * InputOTEvalue)/100);
			 variablePayPerctange= 35;
		}

		else if (selectedPayplan =='TLVP' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((80 * InputOTEvalue)/100);
			 variablePayPerctange= 20;
			 targetlinkedvarPayper = 20;
		}

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GCS' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GMS' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GVS' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((65 * InputOTEvalue)/100);
			 variablePayPerctange= 35;
			 salesincentivePlanper = 35;
		}
		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B7_1') ) ) {

			 fp = parseFloat((65 * InputOTEvalue)/100);
			 variablePayPerctange= 35;
			 salesincentivePlanper =35;
		}


		else if (selectedPayplan =='ABP' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 annualBonusPlanper = 25;
		}

		else if (selectedPayplan =='SRBP' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 annualBonusPlanper = 25/2;
			 salesincentivePlanper = 25/2;
		}

		else if (selectedPayplan =='PartSIP' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((65 * InputOTEvalue)/100);
			 variablePayPerctange= 35;
		}

		else if (selectedPayplan =='TLVP' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((75 * InputOTEvalue)/100);
			 variablePayPerctange= 25;
			 targetlinkedvarPayper = 25;
		}

		else if (selectedPayplan =='FullSIP_GES' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GCS' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GMS' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((100 * InputOTEvalue)/100);
			 variablePayPerctange= 0;
		}
		else if (selectedPayplan =='FullSIP_GVS' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((65 * InputOTEvalue)/100);
			 variablePayPerctange= 35;
			 salesincentivePlanper = 35;
		}
		else if (selectedPayplan =='FullSIP_TCTS' && ( (selectedSubBand == 'B8_1') ) ) {

			 fp = parseFloat((65 * InputOTEvalue)/100);
			 variablePayPerctange= 35;
			 salesincentivePlanper = 35;
		}



	}

	else if(selectedCountry =='Australia'|| selectedCountry =='Bermuda'||selectedCountry =='Canada'||selectedCountry =='France'||selectedCountry =='Germany' ||selectedCountry =='HongKong' ||selectedCountry =='Italy' ||selectedCountry =='Japan' || selectedCountry =='Malaysia' || selectedCountry =='Netherlands'|| selectedCountry =='Norway'|| selectedCountry =='Philippines' || selectedCountry =='Poland' || selectedCountry =='Portugal' || selectedCountry =='Russia'||selectedCountry =='Singapore' || selectedCountry =='Spain' ||selectedCountry =='uk' || selectedCountry =='us'  ) {

		if(selectedPayplan =='ABP' && selectedSubBand =='B1_1'){

			fp = parseFloat((95.238 * InputOTEvalue)/100);

			variablePayPerctange = 5;
			annualBonusPlanper = 5;

		}

		else if (selectedPayplan =='SRBP' && selectedSubBand =='B1_1') {


			fp = parseFloat((90.909 * InputOTEvalue)/100);

			variablePayPerctange = 10;
			annualBonusPlanper = 10/2;
			salesincentivePlanper = 10/2;

		}

		else if (selectedPayplan =='FullSIP_GES' && selectedSubBand =='B1_1') {


			fp = parseFloat((50 * InputOTEvalue)/100);

			variablePayPerctange = 100;
			
			salesincentivePlanper = 100;

		}

		else if (selectedPayplan =='FullSIP' && selectedSubBand =='B1_1') {


			fp = parseFloat((59.8802 * InputOTEvalue)/100);

			variablePayPerctange = 67;
			
			salesincentivePlanper = 67;
		}

		//------------------------B2-1 & B2-2

		if(selectedPayplan =='ABP' && (selectedSubBand =='B2_1' || selectedSubBand == 'B2_2')){

			fp = parseFloat((95.238 * InputOTEvalue)/100);

			variablePayPerctange = 5;
			annualBonusPlanper = 5;

		}

		else if (selectedPayplan =='SRBP' && (selectedSubBand =='B2_1' || selectedSubBand == 'B2_2')) {


			fp = parseFloat((90.909 * InputOTEvalue)/100);

			variablePayPerctange = 10;
			annualBonusPlanper = 10/2;
			salesincentivePlanper = 10/2;

		}

		else if (selectedPayplan =='FullSIP_GES' && (selectedSubBand =='B2_1' || selectedSubBand == 'B2_2')) {


			fp = parseFloat((50 * InputOTEvalue)/100);

			variablePayPerctange = 100;
			
			salesincentivePlanper = 100;

		}

		else if (selectedPayplan =='FullSIP' && (selectedSubBand =='B2_1' || selectedSubBand == 'B2_2')) {


			fp = parseFloat((59.8802 * InputOTEvalue)/100);

			variablePayPerctange = 67;
			
			salesincentivePlanper = 67;
		}

		//-----------------B3_1

		if(selectedPayplan =='ABP' && (selectedSubBand =='B3_1' || selectedSubBand == 'B3_2')){

			fp = parseFloat((90.909 * InputOTEvalue)/100);

			variablePayPerctange = 10;
			annualBonusPlanper = 10;

		}

		else if (selectedPayplan =='SRBP' && (selectedSubBand =='B3_1' || selectedSubBand == 'B3_2')) {


			fp = parseFloat((83.3334 * InputOTEvalue)/100);

			variablePayPerctange = 20;
			annualBonusPlanper = 20/2;
			salesincentivePlanper = 20/2;

		}

		else if (selectedPayplan =='FullSIP_GES' && (selectedSubBand =='B3_1' || selectedSubBand == 'B3_2')) {


			fp = parseFloat((50 * InputOTEvalue)/100);

			variablePayPerctange = 100;
			
			salesincentivePlanper = 100;

		}

		else if (selectedPayplan =='FullSIP' && (selectedSubBand =='B3_1' || selectedSubBand == 'B3_2')) {


			fp = parseFloat((59.8802 * InputOTEvalue)/100);

			variablePayPerctange = 67;
			
			salesincentivePlanper = 67;
		}

		//-----------------B4

		if(selectedPayplan =='ABP' && (selectedSubBand =='B4_1' || selectedSubBand == 'B4_2')){

			fp = parseFloat((86.9566 * InputOTEvalue)/100);

			variablePayPerctange = 15;
			annualBonusPlanper = 15;

		}

		else if (selectedPayplan =='SRBP' && (selectedSubBand =='B4_1' || selectedSubBand == 'B4_2')) {


			fp = parseFloat((80 * InputOTEvalue)/100);

			variablePayPerctange = 25;
			annualBonusPlanper = 25/2;
			salesincentivePlanper = 25/2;

		}

		else if (selectedPayplan =='FullSIP_GES' && (selectedSubBand =='B4_1' || selectedSubBand == 'B4_2')) {


			fp = parseFloat((50 * InputOTEvalue)/100);

			variablePayPerctange = 100;
			
			salesincentivePlanper = 100;

		}

		else if (selectedPayplan =='FullSIP' && (selectedSubBand =='B4_1' || selectedSubBand == 'B4_2')) {


			fp = parseFloat((59.8802 * InputOTEvalue)/100);

			variablePayPerctange = 67;
			
			salesincentivePlanper = 67;
		}

		//---------------------B5-1
		if(selectedPayplan =='ABP' && selectedSubBand =='B5_1'){

			fp = parseFloat((80 * InputOTEvalue)/100);

			variablePayPerctange = 25;
			annualBonusPlanper = 25;

		}

		else if (selectedPayplan =='SRBP' && selectedSubBand =='B5_1') {


			fp = parseFloat((76.923 * InputOTEvalue)/100);

			variablePayPerctange = 30;
			annualBonusPlanper = 30/2;
			salesincentivePlanper = 30/2;

		}

		else if (selectedPayplan =='FullSIP_GES' && selectedSubBand =='B5_1') {


			fp = parseFloat((50 * InputOTEvalue)/100);

			variablePayPerctange = 100;
			
			salesincentivePlanper = 100;

		}

		else if (selectedPayplan =='FullSIP' && selectedSubBand =='B5_1') {


			fp = parseFloat((59.8802 * InputOTEvalue)/100);

			variablePayPerctange = 67;
			
			salesincentivePlanper = 67;
		}


		//------------------------B6_1
		if(selectedPayplan =='ABP' && selectedSubBand =='B6_1'){

			fp = parseFloat((80 * InputOTEvalue)/100);

			variablePayPerctange = 25;
			annualBonusPlanper = 25;

		}

		else if (selectedPayplan =='SRBP' && selectedSubBand =='B6_1') {


			fp = parseFloat((76.923 * InputOTEvalue)/100);

			variablePayPerctange = 30;
			annualBonusPlanper = 30/2;
			salesincentivePlanper = 30/2;

		}

		else if (selectedPayplan =='FullSIP_GES' && selectedSubBand =='B6_1') {


			fp = parseFloat((50 * InputOTEvalue)/100);

			variablePayPerctange = 100;
			
			salesincentivePlanper = 100;

		}

		else if (selectedPayplan =='FullSIP' && selectedSubBand =='B6_1') {


			fp = parseFloat((59.8802 * InputOTEvalue)/100);

			variablePayPerctange = 67;
			
			salesincentivePlanper = 67;
		}

		//-------------------B7_1

		if(selectedPayplan =='ABP' && selectedSubBand =='B7_1'){

			fp = parseFloat((76.923 * InputOTEvalue)/100);

			variablePayPerctange = 30;
			annualBonusPlanper = 30;

		}

		else if (selectedPayplan =='SRBP' && selectedSubBand =='B7_1') {


			fp = parseFloat((71.4286 * InputOTEvalue)/100);

			variablePayPerctange = 40;
			annualBonusPlanper = 40/2;
			salesincentivePlanper = 40/2;

		}

		else if (selectedPayplan =='FullSIP_GES' && selectedSubBand =='B7_1') {


			fp = parseFloat((50 * InputOTEvalue)/100);

			variablePayPerctange = 100;
			
			salesincentivePlanper = 100;

		}

		else if (selectedPayplan =='FullSIP' && selectedSubBand =='B7_1') {


			fp = parseFloat((59.8802 * InputOTEvalue)/100);

			variablePayPerctange = 67;
			
			salesincentivePlanper = 67;
		}

		//--------------------------B8_1

		if(selectedPayplan =='ABP' && selectedSubBand =='B8_1'){

			fp = parseFloat((71.4286 * InputOTEvalue)/100);

			variablePayPerctange = 40;
			annualBonusPlanper = 40;

		}

		else if (selectedPayplan =='SRBP' && selectedSubBand =='B8_1') {


			fp = parseFloat((66.6666 * InputOTEvalue)/100);

			variablePayPerctange = 50;
			annualBonusPlanper = 50/2;
			salesincentivePlanper = 50/2;

		}

		else if (selectedPayplan =='FullSIP_GES' && selectedSubBand =='B8_1') {


			fp = parseFloat((50 * InputOTEvalue)/100);

			variablePayPerctange = 100;
			
			salesincentivePlanper = 100;

		}

		else if (selectedPayplan =='FullSIP' && selectedSubBand =='B8_1') {


			fp = parseFloat((59.8802 * InputOTEvalue)/100);

			variablePayPerctange = 67;
			
			salesincentivePlanper = 67;
		}
	}


			var transportAllowance ={

				'B1_1':24000,
				'B2_1':24000,
				'B2_2':24000,
				'B3_1':36000,
				'B3_2':36000,
				'B4_1':48000,
				'B4_2':48000,
				'B5_1':48000,
				'B5_2':60000,
				'B6_1':60000,
				'B7_1':84000,
				'B8_1':84000,
				'B8_2':84000

			};



			ctcCalculation ={

				'fixedPays1':0,
				'annualCTC':0,
				'variablePayplan':0,

				'AnnualBonusPlan':0,
				'SalesincentivePlan':0,
				'targetlinkedvarPay':0,
			
				'annualBasic':0,
				
				'transportAllow':0,
				'statutoryBonus':0,
				'Retirals':0,
				'housingAllow':0,
				'specialAllow':0
				
				
				};


				if( selectedSubBand =='B0_1' || selectedSubBand =='B0_2'){
					ctcCalculation['fixedPays1'] = fp;
					ctcCalculation['annualCTC'] = InputOTEvalue;
					ctcCalculation['variablePayplan'] = 0 ;
					ctcCalculation['AnnualBonusPlan'] = 0;
					ctcCalculation['SalesincentivePlan'] = 0 ;
					ctcCalculation['targetlinkedvarPay'] = 0;
					ctcCalculation['annualBasic'] = (76 * InputOTEvalue)/100; 
					/*ctcCalculation['housingAllow'] = 0; */
					ctcCalculation['transportAllow'] =0;
					ctcCalculation['statutoryBonus'] = (8.33 * ctcCalculation['annualBasic'] )/100;
					ctcCalculation['Retirals'] = (16.81 * ctcCalculation['annualBasic'])/100;
					ctcCalculation['housingAllow'] = InputOTEvalue - ctcCalculation['annualBasic'] - ctcCalculation['statutoryBonus'] - ctcCalculation['Retirals'] ;
					ctcCalculation['specialAllow'] =0;
				}

				else
				{


			ctcCalculation['fixedPays1'] = fp;
			ctcCalculation['annualCTC'] = InputOTEvalue;
			ctcCalculation['variablePayplan'] =  (selectedCountry=='INDIA'||selectedCountry=='SriLanka' )? (variablePayPerctange * InputOTEvalue)/100 :(variablePayPerctange * fp) /100 ;
			
			 ctcCalculation['AnnualBonusPlan'] = ( (selectedSubBand=='B5_1' && selectedPayplan =='PartSIP') || (selectedSubBand=='B6_1' && selectedPayplan =='PartSIP') ) ? (10 * InputOTEvalue)/100 :  ( (selectedSubBand=='B7_1' && selectedPayplan =='PartSIP')  || (selectedSubBand=='B8_1' && selectedPayplan =='PartSIP') ) ? ( 15 * InputOTEvalue)/100 : (selectedCountry=='INDIA'||selectedCountry=='SriLanka' )?  (annualBonusPlanper * InputOTEvalue)/100 : (annualBonusPlanper * fp)/100   ;



			 // ctcCalculation['AnnualBonusPlan'] = (selectedSubBand =='B5_1' && )   ? (10 * InputOTEvalue)/100 : (annualBonusPlanper * InputOTEvalue)/100 ;

			 ctcCalculation['SalesincentivePlan'] = ( (selectedSubBand=='B5_1' && selectedPayplan =='PartSIP') || (selectedSubBand=='B6_1' && selectedPayplan =='PartSIP') ||(selectedSubBand=='B7_1' && selectedPayplan =='PartSIP')  || (selectedSubBand=='B8_1' && selectedPayplan =='PartSIP') ) ? (20 * InputOTEvalue)/100 : (selectedCountry=='INDIA'||selectedCountry=='SriLanka' )?  (salesincentivePlanper * InputOTEvalue)/100 : (salesincentivePlanper * fp)/100 ;

			 ctcCalculation['targetlinkedvarPay'] = (targetlinkedvarPayper * InputOTEvalue)/100;


			ctcCalculation['annualBasic'] = (selectedCountry=='SaudiArabia' || selectedCountry=='UAE') ? (40 * fp)/100 : (selectedCountry=='SriLanka') ? (30 * InputOTEvalue)/100 :  /*  (selectedSubBand =='B0_1' || selectedSubBand =='B0_2' ) ? (76 * InputOTEvalue)/100 : */ ( selectedCountry=='INDIA' && selectedSubBand == 'B1_1') ? (40 * InputOTEvalue)/100 :( selectedCountry=='INDIA' && selectedSubBand != 'B1_1') ?(28 * InputOTEvalue)/100 :0;


		/*	ctcCalculation['housingAllow'] = (selectedCountry=='SaudiArabia' || selectedCountry=='UAE') ? (35 * fp) /100 : 0;   */
			ctcCalculation['transportAllow'] = (selectedCountry=='SaudiArabia' || selectedCountry=='UAE') ? transportAllowance[selectedSubBand] : 0;
			ctcCalculation['Retirals'] = (selectedCountry=='INDIA') ? (4.71 * InputOTEvalue)/100 : (selectedCountry =='SriLanka' ) ? (16.53 * fp)/100 :0 ;

			ctcCalculation['housingAllow'] = (selectedCountry=='SaudiArabia' || selectedCountry=='UAE') ? (35 * fp) /100 : 0; 
			ctcCalculation['specialAllow'] = (selectedCountry=='INDIA' || selectedCountry=='SriLanka') ? ctcCalculation['fixedPays1'] -(ctcCalculation['annualBasic']+ ctcCalculation['Retirals'] + ctcCalculation['housingAllow'] + ctcCalculation['transportAllow']) : (selectedCountry=='SaudiArabia' || selectedCountry=='UAE') ? ctcCalculation['fixedPays1'] -(ctcCalculation['annualBasic']+ ctcCalculation['housingAllow'] + ctcCalculation['transportAllow']) : 0;

		}




			return ctcCalculation;


		}


	var InputOTEvalue = document.getElementById('OTE').value;

	var a = document.getElementById("country").selectedIndex;
	var selectedCountry =document.getElementById('country')[a].value;

	var b = document.getElementById("sub_band").selectedIndex;
	var selectedSubBand = document.getElementById('sub_band')[b].value;

	var c = document.getElementById("payPlan").selectedIndex;
	var selectedPayplan = document.getElementById('payPlan')[c].value;

	



		var cal = calcCTC(InputOTEvalue,selectedCountry,selectedSubBand,selectedPayplan);

		for(var key in cal){
					
					document.getElementById(key).innerHTML = Math.round(cal[key]);
				}

	
        



}
