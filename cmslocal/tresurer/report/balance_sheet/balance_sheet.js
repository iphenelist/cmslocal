// Copyright (c) 2024, Innocent PM and contributors
// For license information, please see license.txt

frappe.query_reports["Balance Sheet"] = {
	"filters": [
		{
			"fieldname": "period",
			"label": "Period",
			"fieldtype": "Select",
			"options": "Daily\nWeekly\nMonthly\nQuarterly\nYearly"
		}

	]
};
