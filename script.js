//your JS code here. If required.

 let startTime=Date.now();
	let tr=document.createElement('tr');
	tr.innerHTML=`<td  colspan=2 >Loading...</td>`;
	tr.setAttribute('id','loading');
	let output=document.querySelector('#output');
	output.appendChild(tr);
	let promise1=()=>{
		return new Promise((res,rej)=>{
			let r=Math.floor(Math.random()*3+1);
			setTimeout(()=>{
				res(r);
			},r*1000);
		})
	}
	let promise2=()=>{
		return new Promise((res,rej)=>{
			let r=Math.floor(Math.random()*3+1);
			setTimeout(()=>{
				res(r);
			},r*1000);
		})
	}
	let promise3=()=>{
		return new Promise((res,rej)=>{
			let r=Math.floor(Math.random()*3+1);
			setTimeout(()=>{
				res(r);
			},r*1000);
		})
	}

	Promise.all([promise1(),promise2(),promise3()])
	.then((data)=>{
      output.innerHTML='';
      let total=0;
      data.forEach((el,i)=>{
        // total+=el;
        let tr=document.createElement('tr');
          tr.innerHTML=`<td>Promise ${i+1}</td>
                        <td>${el}</td>`;
        output.appendChild(tr);
      })
		 let endTime=Date.now();
      // console.log(endTime);
      total=(endTime-startTime)/1000;
       output.innerHTML+=`<tr><td>Total</td>
                        <td>${total}</td></tr>`;

	})



	







