//    페이지 로드 시 페이징 처리
   $(document).ready(function(){
      contentShow();
      createPage();
      
   });

   var isSearch = false;
   
   function contentShow(){
      var content = $(".content");
      for(var i=0; i < content.length; i++){
         if(i < 8){
            content.eq(i).css("display", "table-row");
         }else{
            content.eq(i).css("display", "none");
         }
      }
   }
   
   function createPage(){
      $(".pagination").remove();
      $(".page_form").append("<ul class='pagination'></ul>");
      var content = $(".content");
      
      var liCount = Math.ceil(content.length/8);
      for(var i=1; i <= liCount; i++){
         if(i==1){
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='pageLi on'>"+i+"</li>");
         }else{
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='pageLi'>"+i+"</li>");
         }
      }
   }
   
//    검색 기능
   function search(){
      isSearch = true;
      var value = $(".srh_input").val();
      var title = $(".title");
      
      for(var i=0; i < title.length; i++){
         $(".content").eq(i).attr("class", "content");
         $(".content").eq(i).css("display", "none");
         
         if(title[i].innerHTML.indexOf(value) != -1){
            $(".content").eq(i).attr("class", "content isSearch");
         }
      }
      
      searchShow();
      searchPage();
   }
   
   function searchShow(){
      var content = $(".isSearch");
      var count = 0;
      while(count < 8){
         if(content.length == count){
            break;
         }else{
            content.eq(count).css("display", "table-row");
            count++;
         }
      }      
   }
   
   function searchPage(){
      
      $(".pagination").remove();
      $(".page_form").append("<ul class='pagination'></ul>");
      
      var content = $(".isSearch");
      
      createGaraData("isSearch");
      
      var liCount = Math.ceil(content.length/8);
      
      for(var i=1; i <= liCount; i++){
         if(i==1){
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='pageLi on'>"+i+"</li>");
         }else{
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='pageLi'>"+i+"</li>");
         }
      }
      
      $(".report1_btn").css("background", "gray");
      $(".report2_btn").css("background", "gray");
      $(".report3_btn").css("background", "gray");
   }
   
//    페이징 처리
   function changePage(index){
      if(isSearch){
         var content = $(".isSearch");
         
         for(var i=0; i < content.length; i++){
            if(i >= 8*(index-1) && i < 8*index){
               content.eq(i).css("display", "table-row");
            }else{
               content.eq(i).css("display", "none");
            }
         }
         
         createGaraData("isSearch");
         
         $(".pageLi").each(function(number, value){
            if(index-1 == number){
               $(".pageLi").eq(number).attr("class", "pageLi on");
            }else{
               $(".pageLi").eq(number).attr("class", "pageLi");
            }
         });
         
      }else{
         var content = $(".content");
         for(var i=0; i < content.length; i++){
            if(i >= 8*(index-1) && i < 8*index){
               content.eq(i).css("display", "table-row");
            }else{
               content.eq(i).css("display", "none");
            }
         }
         
         createGaraData("content");
         
         $(".pageLi").each(function(number, value){
            if(index-1 == number){
               $(".pageLi").eq(number).attr("class", "pageLi on");
            }else{
               $(".pageLi").eq(number).attr("class", "pageLi");
            }
         });         
         
      }
      
   }
   
   function reportView(item){
      isSearch = true;
      $(".srh_input").val("");
      var content = $(".content");
      for(var i=0; i < content.length; i++){
         content.eq(i).attr("class", "content");
         content.eq(i).css("display", "none");
      }
      
      var report = $("."+item);
      
      for(var i=0; i < report.length; i++){
         var parent = report[i].parentNode;
         parent.className = "content isSearch";
      }
      
      searchShow();
      searchPage();
      
      createGaraData("isSearch");
      
      
      $(".report1_btn").css("background", "gray");
      $(".report2_btn").css("background", "gray");
      $(".report3_btn").css("background", "gray");
      
      var click_btn = $("."+item+"_btn");
      
      click_btn.css("background", "#5D5D5D");
   }
   
   function createGaraData(data){
      $(".gara").remove();
      var content = $("."+data);
      var count = 0;
      content.each(function(i, value){
         if(content.eq(i).css("display") == "table-row"){
            count++;
         }
      });
      
      var str = "";
      str += "<tr class='gara'>";
      str += "<td></td>";
      str += "<td></td>";
      str += "<td></td>";
      str += "</tr>";
      
      if(8-count != 0){
         for(var i=0; i < (8-count); i++){
            $(".board_table").append(str);
         }
      }else{
         $(".gara").remove();
      }
   }