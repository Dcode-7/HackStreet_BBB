
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardContent, TabContent } from "@/components/ui/card-content";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Mail,
  FileText,
  Clock,
  ArrowUpDown,
  MoreHorizontal,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const clientsData = [
  {
    id: 1,
    name: "Acme Corporation",
    contact: "John Smith",
    email: "john@acmecorp.com",
    phone: "(555) 123-4567",
    status: "Active",
    projects: 3,
    totalBilled: 12500,
    lastContact: "2023-03-15",
  },
  {
    id: 2,
    name: "Globex Industries",
    contact: "Jane Doe",
    email: "jane@globex.com",
    phone: "(555) 987-6543",
    status: "Active",
    projects: 1,
    totalBilled: 4750,
    lastContact: "2023-03-10",
  },
  {
    id: 3,
    name: "Initech LLC",
    contact: "Michael Johnson",
    email: "michael@initech.com",
    phone: "(555) 456-7890",
    status: "Inactive",
    projects: 0,
    totalBilled: 8200,
    lastContact: "2023-02-28",
  },
  {
    id: 4,
    name: "Stark Enterprises",
    contact: "Tony Stark",
    email: "tony@stark.com",
    phone: "(555) 111-2222",
    status: "Active",
    projects: 2,
    totalBilled: 15800,
    lastContact: "2023-03-18",
  },
  {
    id: 5,
    name: "Wayne Industries",
    contact: "Bruce Wayne",
    email: "bruce@wayne.com",
    phone: "(555) 333-4444",
    status: "Active",
    projects: 1,
    totalBilled: 9300,
    lastContact: "2023-03-05",
  },
];

const Clients = () => {
  const [clients, setClients] = useState(clientsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClient, setSelectedClient] = useState<number | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setClients(clientsData);
    } else {
      const filtered = clientsData.filter(
        (client) =>
          client.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          client.contact.toLowerCase().includes(e.target.value.toLowerCase()) ||
          client.email.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setClients(filtered);
    }
  };

  const handleClientSelect = (id: number) => {
    setSelectedClient(id === selectedClient ? null : id);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold">Client Management</h1>
        <p className="text-muted-foreground">
          Track, manage, and maintain your client relationships.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-auto sm:min-w-[300px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Client
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <CardContent
          title="Active Clients"
          icon={<Users className="h-5 w-5" />}
        >
          <div className="mt-2 text-3xl font-bold">
            {clientsData.filter((c) => c.status === "Active").length}
          </div>
          <div className="mt-1 text-sm text-green-500">+2 from last month</div>
        </CardContent>

        <CardContent
          title="Total Billed"
          icon={<FileText className="h-5 w-5" />}
        >
          <div className="mt-2 text-3xl font-bold">
            ${clientsData.reduce((sum, client) => sum + client.totalBilled, 0).toLocaleString()}
          </div>
          <div className="mt-1 text-sm text-green-500">+$5,800 from last month</div>
        </CardContent>

        <CardContent
          title="Active Projects"
          icon={<Clock className="h-5 w-5" />}
        >
          <div className="mt-2 text-3xl font-bold">
            {clientsData.reduce((sum, client) => sum + client.projects, 0)}
          </div>
          <div className="mt-1 text-sm text-green-500">+3 from last month</div>
        </CardContent>
      </div>

      <Tabs defaultValue="all" className="w-auto">
        <TabsList>
          <TabsTrigger value="all">All Clients</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <ClientList 
            clients={clients} 
            selectedClient={selectedClient} 
            onClientSelect={handleClientSelect} 
          />
        </TabsContent>
        <TabsContent value="active" className="mt-4">
          <ClientList 
            clients={clients.filter(c => c.status === "Active")} 
            selectedClient={selectedClient} 
            onClientSelect={handleClientSelect} 
          />
        </TabsContent>
        <TabsContent value="inactive" className="mt-4">
          <ClientList 
            clients={clients.filter(c => c.status === "Inactive")} 
            selectedClient={selectedClient} 
            onClientSelect={handleClientSelect} 
          />
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <TabContent
          tabs={[
            {
              label: "Recent Invoices",
              content: (
                <div className="space-y-3">
                  {[
                    { client: "Acme Corporation", amount: 3500, date: "2023-03-15", status: "Paid" },
                    { client: "Globex Industries", amount: 1200, date: "2023-03-10", status: "Pending" },
                    { client: "Stark Enterprises", amount: 5800, date: "2023-03-05", status: "Paid" },
                  ].map((invoice, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-md border p-3"
                    >
                      <div>
                        <div className="font-medium">{invoice.client}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(invoice.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="font-medium">${invoice.amount}</div>
                        <div className={`text-sm ${invoice.status === "Paid" ? "text-green-500" : "text-amber-500"}`}>
                          {invoice.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              label: "Upcoming Deadlines",
              content: (
                <div className="space-y-3">
                  {[
                    { client: "Acme Corporation", project: "Website Redesign", deadline: "2023-04-15" },
                    { client: "Stark Enterprises", project: "Mobile App Development", deadline: "2023-04-10" },
                    { client: "Wayne Industries", project: "Brand Identity", deadline: "2023-04-05" },
                  ].map((deadline, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-md border p-3"
                    >
                      <div>
                        <div className="font-medium">{deadline.project}</div>
                        <div className="text-sm text-muted-foreground">
                          {deadline.client}
                        </div>
                      </div>
                      <div className="text-amber-500 font-medium">
                        {new Date(deadline.deadline).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              ),
            },
          ]}
        />

        <TabContent
          tabs={[
            {
              label: "Communication History",
              content: (
                <div className="space-y-3">
                  {[
                    { client: "Acme Corporation", type: "Email", date: "2023-03-15", subject: "Project Update" },
                    { client: "Globex Industries", type: "Call", date: "2023-03-12", subject: "Contract Discussion" },
                    { client: "Stark Enterprises", type: "Meeting", date: "2023-03-10", subject: "Kickoff Session" },
                  ].map((comm, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-md border p-3"
                    >
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{comm.subject}</div>
                        <div className="text-sm text-muted-foreground">
                          {comm.client} - {comm.type} - {new Date(comm.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              label: "Follow-ups",
              content: (
                <div className="space-y-3">
                  {[
                    { client: "Initech LLC", task: "Send proposal", dueDate: "2023-03-20" },
                    { client: "Wayne Industries", task: "Schedule review meeting", dueDate: "2023-03-22" },
                    { client: "Acme Corporation", task: "Contract renewal discussion", dueDate: "2023-03-25" },
                  ].map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-md border p-3"
                    >
                      <div>
                        <div className="font-medium">{task.task}</div>
                        <div className="text-sm text-muted-foreground">
                          {task.client}
                        </div>
                      </div>
                      <div className="text-amber-500 font-medium">
                        {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

interface ClientListProps {
  clients: typeof clientsData;
  selectedClient: number | null;
  onClientSelect: (id: number) => void;
}

const ClientList = ({ clients, selectedClient, onClientSelect }: ClientListProps) => {
  return (
    <div className="rounded-md border">
      <div className="grid grid-cols-12 bg-muted p-3 text-sm font-medium">
        <div className="col-span-4">Name</div>
        <div className="col-span-3">Contact</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2 text-right">Projects</div>
        <div className="col-span-1"></div>
      </div>
      <div className="divide-y">
        {clients.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">No clients found</div>
        ) : (
          clients.map((client) => (
            <React.Fragment key={client.id}>
              <div 
                className={`grid grid-cols-12 items-center p-3 cursor-pointer hover:bg-muted/50 ${
                  selectedClient === client.id ? "bg-muted/50" : ""
                }`}
                onClick={() => onClientSelect(client.id)}
              >
                <div className="col-span-4 font-medium">{client.name}</div>
                <div className="col-span-3 text-sm">
                  <div>{client.contact}</div>
                  <div className="text-muted-foreground">{client.email}</div>
                </div>
                <div className="col-span-2">
                  <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                    client.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {client.status}
                  </span>
                </div>
                <div className="col-span-2 text-right font-medium">{client.projects}</div>
                <div className="col-span-1 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {selectedClient === client.id && (
                <div className="bg-muted/30 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Client Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Company:</span>
                        <span>{client.name}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Contact:</span>
                        <span>{client.contact}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Email:</span>
                        <span>{client.email}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Phone:</span>
                        <span>{client.phone}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Status:</span>
                        <span>{client.status}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Financial Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Total Billed:</span>
                        <span>${client.totalBilled.toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Active Projects:</span>
                        <span>{client.projects}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-muted-foreground">Last Contact:</span>
                        <span>{new Date(client.lastContact).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        View Invoices
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default Clients;
