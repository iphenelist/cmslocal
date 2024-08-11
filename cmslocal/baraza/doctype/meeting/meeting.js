// Copyright (c) 2024, Innocent PM and contributors
// For license information, please see license.txt

frappe.ui.form.on("Meeting", {
	year: function(frm) {
        if (frm.doc.year) {
            frappe.db.get_doc("Baraza Member", frm.doc.year)
                .then(temp_doc => {
                    if (temp_doc.baraza_members && temp_doc.baraza_members.length > 0) {
                        frm.clear_table(invited_member); // Clear existing data in child table
                        for (const d of temp_doc.baraza_members) {
                            frm.add_child(invited_member, {
                                member: d.member,
                                full_name: d.full_name,
                                phone_number: d.phone_number,
                                department: d.department
                                // Add other fields from the template as needed
                            });
                        }
                        frm.refresh_field(invited_member);
                    }
                });
        }
    }
});