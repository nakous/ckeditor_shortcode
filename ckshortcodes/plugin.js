(function () {
	CKEDITOR.plugins.add('ckshortcodes', {
		lang: [ 'en'],
		init: function (editor) {
			//--------------ok
			editor.addCommand('btsalerts', new CKEDITOR.dialogCommand('btsalerts', {}));
			CKEDITOR.dialog.add('btsalerts', this.path + 'dialogs/btsalerts.js');
			editor.ui.addButton('btsalerts', {
				label : "Alerts",
				toolbar : 'insert',
				command : 'btsalerts',
				icon : this.path + 'icons/btsalerts.png'
			});
		
			//--------------ok

			editor.addCommand('btsaccordions', {
			   exec: function(){
					editor.insertHtml('[accordions ] [/accordions]');
			   }
			});
			editor.ui.addButton('btsaccordions', {
				label : "Accordions",
				toolbar : 'insert',
				command : 'btsaccordions',
				icon : this.path + 'icons/btsaccordions.png'
			});
				// --------------ok

			editor.addCommand('btsaccordion', new CKEDITOR.dialogCommand('btsaccordion', {}));
			CKEDITOR.dialog.add('btsaccordion', this.path + 'dialogs/btsaccordion.js');
			editor.ui.addButton('btsaccordion', {
				label : "Accordion item",
				toolbar : 'insert',
				command : 'btsaccordion',
				icon : this.path + 'icons/btsaccordion.png'
			});
			//-------------- ok
			// editor.addCommand('btshr', new CKEDITOR.dialogCommand('btshr', {}));
			// CKEDITOR.dialog.add('btshr', this.path + 'dialogs/btshr.js');
			editor.addCommand('btshr', {
			   exec: function(){
					editor.insertHtml('[hr]');
			   }
			});
			editor.ui.addButton('btshr', {
				label : "HR",
				toolbar : 'insert',
				command : 'btshr',
				icon : this.path + 'icons/btshr.png'
			});
			//--------------
			editor.addCommand('btsjumbotron', new CKEDITOR.dialogCommand('btsjumbotron', {}));
			CKEDITOR.dialog.add('btsjumbotron', this.path + 'dialogs/btsjumbotron.js');
			editor.ui.addButton('btsjumbotron', {
				label : "Jumbotron",
				toolbar : 'insert',
				command : 'btsjumbotron',
				icon : this.path + 'icons/btsjumbotron.png'
			});		
			//--------------
			editor.addCommand('btsprogress', new CKEDITOR.dialogCommand('btsprogress', {}));
			CKEDITOR.dialog.add('btsprogress', this.path + 'dialogs/btsprogress.js');			
			editor.ui.addButton('btsprogress', {
				label : "Progress Bar",
				toolbar : 'insert',
				command : 'btsprogress',
				icon : this.path + 'icons/btsprogress.png'
			});	
			//--------------
			editor.addCommand('btsrow', {
			   exec: function(){
					editor.insertHtml('[row][/row]');
			   }
			});	
			editor.ui.addButton('btsrow', {
				label : "Row",
				toolbar : 'insert',
				command : 'btsrow',
				icon : this.path + 'icons/btsrow.png'
			});			
						//--------------
			editor.addCommand('btscol', new CKEDITOR.dialogCommand('btscol', {}));
			CKEDITOR.dialog.add('btscol', this.path + 'dialogs/btscol.js');
			editor.ui.addButton('btscol', {
				label : "Col",
				toolbar : 'insert',
				command : 'btscol',
				icon : this.path + 'icons/btscol.png'
			});
			
		}
	});
})();