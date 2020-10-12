var str = "";
var vote_count = {
	mille : 0,
	Spedicey : 0,
	Crewdiepie : 0,
	muyskerm : 0,
	Chilled : 0,
	markiplier : 0,
	valkyrae : 0,
	poki : 0,
	Toast : 0,
	Wade : 0,
};

$(document).ready(
	function(){
		$("#p1vote").click(
			function(){
				vote_count.mille++;
				$("#p1vote").html(vote_count.mille);
			}
		);
	    $("#p2vote").click(
			function(){
				vote_count.Spedicey++;
				$("#p2vote").html(vote_count.Spedicey);
			}
		);
		$("#p3vote").click(
			function(){
				vote_count.Crewdiepie++;
				$("#p3vote").html(vote_count.Crewdiepie);
			}
		);
		$("#p4vote").click(
			function(){
				vote_count.muyskerm++;
				$("#p4vote").html(vote_count.muyskerm);
			}
		);
		$("#p5vote").click(
			function(){
				vote_count.Chilled++;
				$("#p5vote").html(vote_count.Chilled);
			}
		);
		$("#p6vote").click(
			function(){
				vote_count.markiplier++;
				$("#p6vote").html(vote_count.markiplier);
			}
		);
		$("#p7vote").click(
			function(){
				vote_count.valkyrae++;
				$("#p7vote").html(vote_count.valkyrae);
			}
		);
		$("#p8vote").click(
			function(){
				vote_count.poki++;
				$("#p8vote").html(vote_count.poki);
			}
		);
		$("#p9vote").click(
			function(){
				vote_count.Toast++;
				$("#p9vote").html(vote_count.Toast);
			}
		);
		$("#p10vote").click(
			function(){
				vote_count.Wade++;
				$("#p10vote").html(vote_count.Wade);
			}
		);
	}
);