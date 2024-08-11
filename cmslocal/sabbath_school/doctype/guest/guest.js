// Copyright (c) 2024, Innocent PM and contributors
// For license information, please see license.txt

frappe.ui.form.on('Guest', {
	refresh(frm) {
		frm.set_query('attended_by',
			function() {
				return{
					filters: {
						membership_type: ['in', 'Mshiriki wa kanisa']
					}
				}
			}
		)

	}
});
