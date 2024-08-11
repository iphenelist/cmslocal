// Copyright (c) 2024, Innocent PM and contributors
// For license information, please see license.txt

frappe.ui.form.on('SS Class', {
	refresh(frm) {
		frm.set_query('member', 'class_members',
			function() {
				return{
					filters: {
						address: frm.doc.address
					}
				}
			}
		)

	}
});
