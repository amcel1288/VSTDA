(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;
        vm.things = [];
        vm.addThing = addThing;

     	///////////////
     	
     	vm.classSort = classSort;
     	vm.revClassSort = revClassSort;
     	vm.textSort = textSort;
     	vm.selectToDo = selectToDo;
     	vm.deleteSelected = deleteSelected;
     	vm.typeSort = '';
     	vm.newId = 0;
     	


        function addThing() {
        	var obj = {
        		text: vm.newThing, 
        		priority: vm.newPriority
        	}
        	obj.id = vm.newId;
        	switch (obj.priority) {
        		case '1':
        			obj.class = "list-group-item-danger"
        			break;
        		case '2':
        			obj.class = "list-group-item-warning"
        			break;
        		case '3':
        			obj.class = "list-group-item-info"
        			break;
        		default:
        			obj.class = "list-group-item-info"
        		}
        	vm.things.push(obj);
        	vm.newId += 1;
        	vm.newThing = '';
        	
        };
        function classSort() {
        	vm.typeSort = 'priority';
        }
        function revClassSort() {
        	vm.typeSort = '-priority';
        }
        function textSort() {
        	vm.typeSort = 'text';
        }

        function selectToDo(todo) {
        	vm.selectedToDo = todo;
        	console.log('goodbye');
        }

      	function deleteSelected(item) {
      		
      		vm.index = vm.things.indexOf(item);
      		vm.things.splice(vm.index, 1);
      		

      	}
    }
})();




// list-group-item-danger
// list-group-item-info
// list-group-item-warning