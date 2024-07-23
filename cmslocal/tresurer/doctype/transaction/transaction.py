# Copyright (c) 2024, Innocent PM and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Transaction(Document):
    def before_save(self):
        self.execute()

    def execute(self):
        account = frappe.get_doc("Account", self.account_name)
        if self.trasanction_type == "Deposit":
            account.deposit(self.amount)
        elif self.trasanction_type == "Withdrawal":
            account.withdraw(self.amount)