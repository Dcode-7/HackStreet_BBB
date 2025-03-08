import React from "react";
import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ShieldCheck, Bell, CreditCard, User } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-8">
      {" "}
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account, security, and preferences.
        </p>
      </motion.div>
      {/* Account Settings */}
      <CardContent
        title="Account Details"
        icon={<User className="h-5 w-5" />}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <Input placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Input placeholder="john.doe@example.com" type="email" />
          </div>
          <div>
            <label className="block text-sm font-medium">Username</label>
            <Input placeholder="johndoe123" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <Input placeholder="+1 234 567 890" />
          </div>
        </div>
        <Button variant="outline">Update Profile</Button>
      </CardContent>
      {/* Security Settings */}
      <CardContent
        title="Security Settings"
        icon={<ShieldCheck className="h-5 w-5" />}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Enable Two-Factor Authentication</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>Change Password</span>
            <Button variant="outline">Change</Button>
          </div>
          <div className="flex items-center justify-between">
            <span>Login Alerts</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>Remember Devices</span>
            <Switch />
          </div>
        </div>
      </CardContent>
      {/* Notification Settings */}
      <CardContent
        title="Notification Preferences"
        icon={<Bell className="h-5 w-5" />}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>Push Notifications</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>SMS Notifications</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>Weekly Summary Emails</span>
            <Switch />
          </div>
        </div>
      </CardContent>
      {/* Billing & Payments */}
      <CardContent
        title="Billing & Payments"
        icon={<CreditCard className="h-5 w-5" />}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Payment Method</label>
            <Input placeholder="**** **** **** 1234" />
          </div>
          <div>
            <label className="block text-sm font-medium">Billing Address</label>
            <Input placeholder="123 Main Street, City, Country" />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Subscription Plan
            </label>
            <Input placeholder="Premium - $9.99/month" disabled />
          </div>
        </div>
        <Button variant="outline">Update Payment</Button>
      </CardContent>
    </div>
  );
};

export default Settings;
