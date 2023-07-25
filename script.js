const textarea = document.querySelector("textarea");
        textarea,addEventListener("keyup", e =>{
            let scHeight = e.target.scrollHeight;
            textarea.style.height = "auto" ;
            textarea.style.height = `${scHeight}px` ;
        })

        function printDiv(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;
       
            document.body.innerHTML = printContents;
       
            window.print();
       
            document.body.innerHTML = originalContents;
       }