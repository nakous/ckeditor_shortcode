CKEDITOR.dialog.add('btsalerts', function (editor) {
	return {
		title: 'Alerts',
		minWidth: 300,
		minHeight: 150,
		resizable: false,
		contents: [
			{
				id : 'tab1',
				label : 'First Tab',
				title : 'First Tab',
				elements :[
					
						{
							id: 'btntype',
							type: 'select',
							label: "Alert type",
							items: [
								["Success", 'success'],
								["Info", 'info'],
								["Warning", 'warning'],
								["Danger", 'danger']
							],
							validate: CKEDITOR.dialog.validate.notEmpty( "Explanation field cannot be empty." ),
							setup: function (widget) {
								this.setValue(widget.data.btntype || 'info');
							},
							commit: function (widget) {
								widget.setData('btntype', this.getValue());
							}
						},
						{
							id: 'message',
							type: 'text',
							label: "Text",
							validate: CKEDITOR.dialog.validate.notEmpty( "Explanation field cannot be empty." ),
							setup: function (widget) {
								this.setValue(widget.data.message || '');
							},
							commit: function (widget) {
								widget.setData('message', this.getValue());
							}
						}
					
				]
			}
		],
		onOk: function() {
			var type = this.getValueOf('tab1', 'btntype');
			var message = this.getValueOf('tab1', 'message');
			editor.insertHtml('[alerts type="'+type+'"]'+message+'[/alerts]');
			// editor.insertText('[alerts type="'+type+'"]'+message+'[/alerts]');
		}
	};
});