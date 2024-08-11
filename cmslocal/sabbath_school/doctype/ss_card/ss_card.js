// Copyright (c) 2024, Innocent PM and contributors
// For license information, please see license.txt

frappe.ui.form.on('SS Card', {
    first_template: function(frm) {
        handle_template_selection(frm, 'first_template', 'first_template_details');
    },
    second_template: function(frm) {
        handle_template_selection(frm, 'second_template', 'second_template_details');
    },
    third_template: function(frm) {
        handle_template_selection(frm, 'third_template', 'third_template_details');
    }
});

function handle_template_selection(frm, template_field, details_table) {
    if (frm.doc[template_field]) {
        frappe.db.get_doc("SS Card Template", frm.doc[template_field])
            .then(temp_doc => {
                if (temp_doc.template_details && temp_doc.template_details.length > 0) {
                    frm.clear_table(details_table); // Clear existing data in child table
                    for (const d of temp_doc.template_details) {
                        frm.add_child(details_table, {
                            description: d.description,
                            // Add other fields from the template as needed
                        });
                    }
                    frm.refresh_field(details_table);
                }
            });
    }
}
