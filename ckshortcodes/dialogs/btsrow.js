CKEDITOR.dialog.add('btsrow', function (editor) {
					return {
						title: 'btsrow',
						minWidth: 500,
						minHeight: 150,
						resizable: false,
						contents: [
							{
								id : 'tab1',
								label : 'First Tab',
								title : 'First Tab',
								elements :[]
							}
						]
					};
				});