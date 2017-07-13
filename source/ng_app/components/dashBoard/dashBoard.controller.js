(function() {
  "use strict";
  angular
    .module("ExpenseApp.dashBoard.controllers", [])
    .controller("dashBoardController", dashBoardController);

  dashBoardController.$inject = [];

  function dashBoardController() {
    var _this = this;
    _this.LayoutClass = "grid";
    _this.query = "";
    window.scrollTo(0, 0);
    _this.priceOrder = true; //ascending order
    _this.setLayout = setLayout;
    _this.data = [];
    _this.count = 0;
    // localStorage.setItem('expenseData',[]);
    // _this.data=localStorage.getItem('expenseData')!=null?localStorage.getItem('expenseData'):[];
    _this.desc = {};
    _this.addRow = addRow;
    _this.addReview = addReview;
    _this.price = {};

    //functions goes here
    function addRow(count) {
      var added = false;
      var obj = {
        id: count,
        desc: _this.desc[count],
        price: _this.price[count],
        star: false
      };
      if (_this.data.length != 0) {
        _this.data.map(function(d) {
          if (d.desc == _this.desc[count]) {
            added = true;
          }
        });
      }
      if (added == false) {
        _this.count++;
        _this.data.push(obj);
        // localStorage.setItem('expenseData',JSON.stringify(_this.data));
      }
    }
    function addReview(count) {
      var added = false;
      var obj = {
        id: count,
        desc: _this.desc[count],
        price: _this.price[count],
        star: true
      };
      if (_this.data.length != 0) {
        _this.data.map(function(d) {
          if (d.desc == _this.desc[count]) {
            added = true;
          }
        });
      }
      if (added == false) {
        _this.count++;
        _this.data.push(obj);
        // localStorage.setItem('expenseData',JSON.stringify(_this.data));
      }
    }

    function setLayout(layout) {
      _this.LayoutClass = layout;
    }
  }
})();
