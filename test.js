search.onclick = function() {
				var start = document.getElementById('start').value;
				var end = document.getElementById('end').value;

				var dataStart = [],
					dataEnd = [];
					
				var subStationStartIndex = 0,
					subStationEndIndex = 0;

				var shortPath = [];
				// for(var i = 0; i < dataset.length; i ++) {
					for(var j = 0; j < dataset[0].subStation.length; j ++) {
						if(start == dataset[0].subStation[j].staName) {
							// for(var k = 0; k < dataset[0].subStation.length; k ++){
							// 	dataStart.push(dataset[0].subStation);
							// }
							subStationStartIndex = j;
							console.log(dataset[0].id + '号线，' + dataset[0].subStation[j].staName + '站，与上一站相隔' + dataset[0].subStation[j].staWay +  '米');
						}
					}


					for(var j = 0; j < dataset[0].subStation.length; j ++) {
						if(end == dataset[0].subStation[j].staName) {
							// for(var k = 0; k < dataset[0].subStation.length; k ++){
							// 	dataEnd.push(dataset[0].subStation);
							// }
							subStationEndIndex = j;
							console.log(dataset[0].id + '号线，' + dataset[0].subStation[j].staName + '站，与上一站相隔' + dataset[0].subStation[j].staWay +  '米');
						}
					}

					console.log(subStationStartIndex + ' ' + subStationEndIndex);


					if(subStationStartIndex < subStationEndIndex) {
						for(var i = subStationStartIndex;i <= subStationEndIndex;i ++) {
							console.log(dataset[0].subStation[i]);
							shortPath.push(dataset[0].subStation[i]);
						}
					}else{
						for(var i = subStationStartIndex;i >= subStationEndIndex;i --) {
							console.log(subStationStartIndex);
							console.log(dataset[0].subStation[i]);
							shortPath.push(dataset[0].subStation[i]);
						}
					}

					console.log('应乘坐地铁' + dataset[0].id + '号线线路为：');
					for(var x = 0; x < shortPath.length; x ++) {
						if(x == shortPath.length - 1) {
							console.log(shortPath[x].staName);
						}else{
							console.log(shortPath[x].staName + '->');
						}
					}
				// }
				

			}