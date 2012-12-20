var UploadcareDialog = {
	init : function(ed) {
		tinyMCEPopup.resizeToInnerSize();
	},

	insert : function(file) {
		var ed = tinyMCEPopup.editor, dom = ed.dom;

		tinyMCEPopup.execCommand('mceInsertContent', false, dom.createHTML('img', {
			src : file,
			alt : '',
			title : '',
			border : 0
		}));	

		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(UploadcareDialog.init, UploadcareDialog);