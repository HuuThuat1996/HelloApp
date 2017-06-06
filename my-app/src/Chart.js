  import React, { Component} from 'react';
  class Chart extends Comment{
      render(){
          return (

function initializeViz() {
  var placeholderDiv = document.getElementById("tableauViz");
  var url = "https://public.tableau.com/profile/huuthuat#!/vizhome/ConsumerSpendingChange/ConsumerSpendingChange";
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);

}   


          );
      }

  }
  
  
     