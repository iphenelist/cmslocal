# Copyright (c) 2024, Innocent PM and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class JournalEntry(Document):
	def record_transaction(transaction):
		journal_entry = frappe.get_doc({
			"doctype": "Journal Entry",
			"date": transaction.date,
			"transaction_type": transaction.transaction_type,
			"amount": transaction.amount,
			"debit_account": transaction.debit_account,
			"credit_account": transaction.credit_account,
			"description": transaction.description
		})
		journal_entry.insert()

		update_ledger(journal_entry)

def update_ledger(journal_entry):
	debit_account = frappe.get_doc("Ledger Account", journal_entry.debit_account)
	credit_account = frappe.get_doc("Ledger Account", journal_entry.credit_account)

	debit_account.closing_balance += journal_entry.amount
	credit_account.closing_balance -= journal_entry.amount

	debit_account.save()
	credit_account.save()
