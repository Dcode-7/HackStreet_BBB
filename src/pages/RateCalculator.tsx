
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  DollarSign,
  Clock,
  FileText,
  PiggyBank,
  Award,
  Briefcase,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";

const RateCalculator = () => {
  // State for hourly rate calculator
  const [annualSalary, setAnnualSalary] = useState<number | "">("");
  const [annualExpenses, setAnnualExpenses] = useState<number | "">("");
  const [vacationDays, setVacationDays] = useState<number | "">(15);
  const [workHoursPerDay, setWorkHoursPerDay] = useState<number | "">(8);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState<number | "">(5);
  const [profitMargin, setProfitMargin] = useState<number | "">(20);
  
  // State for project rate calculator
  const [hourlyRate, setHourlyRate] = useState<number | "">(50);
  const [projectHours, setProjectHours] = useState<number | "">(40);
  const [complexity, setComplexity] = useState<number>(1);
  const [expenses, setExpenses] = useState<number | "">(0);
  
  // Calculation results
  const [calculatedHourlyRate, setCalculatedHourlyRate] = useState<number | null>(null);
  const [calculatedProjectRate, setCalculatedProjectRate] = useState<number | null>(null);
  
  // Expanded sections
  const [expensesExpanded, setExpensesExpanded] = useState(false);
  const [advancedExpanded, setAdvancedExpanded] = useState(false);
  
  // Calculate hourly rate
  const calculateHourlyRate = () => {
    if (
      annualSalary === "" ||
      annualExpenses === "" ||
      vacationDays === "" ||
      workHoursPerDay === "" ||
      workDaysPerWeek === "" ||
      profitMargin === ""
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    
    const workWeeksPerYear = 52;
    const totalVacationDays = Number(vacationDays);
    const totalWorkDays = Number(workDaysPerWeek) * workWeeksPerYear - totalVacationDays;
    const totalWorkHours = totalWorkDays * Number(workHoursPerDay);
    
    const targetIncome = Number(annualSalary) + Number(annualExpenses);
    const withProfitMargin = targetIncome * (1 + Number(profitMargin) / 100);
    
    const hourlyRate = withProfitMargin / totalWorkHours;
    setCalculatedHourlyRate(parseFloat(hourlyRate.toFixed(2)));
    
    toast.success("Hourly rate calculated successfully!");
  };
  
  // Calculate project rate
  const calculateProjectRate = () => {
    if (hourlyRate === "" || projectHours === "") {
      toast.error("Please fill all required fields");
      return;
    }
    
    const baseRate = Number(hourlyRate) * Number(projectHours);
    const complexityMultiplier = complexity === 1 ? 1 : complexity === 2 ? 1.25 : 1.5;
    const expensesAmount = expenses === "" ? 0 : Number(expenses);
    
    const projectRate = baseRate * complexityMultiplier + expensesAmount;
    setCalculatedProjectRate(parseFloat(projectRate.toFixed(2)));
    
    toast.success("Project rate calculated successfully!");
  };
  
  // Reset calculators
  const resetHourlyCalculator = () => {
    setAnnualSalary("");
    setAnnualExpenses("");
    setVacationDays(15);
    setWorkHoursPerDay(8);
    setWorkDaysPerWeek(5);
    setProfitMargin(20);
    setCalculatedHourlyRate(null);
    toast.info("Hourly rate calculator reset");
  };
  
  const resetProjectCalculator = () => {
    setHourlyRate(50);
    setProjectHours(40);
    setComplexity(1);
    setExpenses(0);
    setCalculatedProjectRate(null);
    toast.info("Project rate calculator reset");
  };
  
  // Download as PDF (placeholder function)
  const downloadPdf = () => {
    toast.success("Your calculation has been downloaded!");
  };
  
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold">Rate Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your ideal rates for hourly work or project-based gigs
        </p>
      </motion.div>
      
      <Tabs defaultValue="hourly" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="hourly" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Hourly Rate</span>
          </TabsTrigger>
          <TabsTrigger value="project" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span>Project Rate</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Hourly Rate Calculator */}
        <TabsContent value="hourly" className="space-y-4 pt-4">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" /> Hourly Rate Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate a sustainable hourly rate based on your financial goals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="desired-annual">Desired Annual Salary ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="desired-annual"
                        type="number"
                        placeholder="60000"
                        className="pl-9"
                        value={annualSalary}
                        onChange={(e) => setAnnualSalary(e.target.value ? Number(e.target.value) : "")}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="annual-expenses">Annual Business Expenses ($)</Label>
                      <button 
                        onClick={() => setExpensesExpanded(!expensesExpanded)}
                        className="flex items-center text-xs text-primary"
                      >
                        {expensesExpanded ? (
                          <>Less <ChevronUp className="ml-1 h-3 w-3" /></>
                        ) : (
                          <>More <ChevronDown className="ml-1 h-3 w-3" /></>
                        )}
                      </button>
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="annual-expenses"
                        type="number"
                        placeholder="12000"
                        className="pl-9"
                        value={annualExpenses}
                        onChange={(e) => setAnnualExpenses(e.target.value ? Number(e.target.value) : "")}
                      />
                    </div>
                    
                    {expensesExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 rounded-md bg-accent p-3 text-sm"
                      >
                        <p className="font-medium">Common Expenses to Include:</p>
                        <ul className="ml-5 mt-1 list-disc space-y-1 text-muted-foreground">
                          <li>Software subscriptions</li>
                          <li>Equipment and maintenance</li>
                          <li>Office space or coworking</li>
                          <li>Insurance premiums</li>
                          <li>Marketing and advertising</li>
                          <li>Professional development</li>
                        </ul>
                      </motion.div>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Work Schedule & Profit</Label>
                      <button 
                        onClick={() => setAdvancedExpanded(!advancedExpanded)}
                        className="flex items-center text-xs text-primary"
                      >
                        {advancedExpanded ? (
                          <>Less <ChevronUp className="ml-1 h-3 w-3" /></>
                        ) : (
                          <>More <ChevronDown className="ml-1 h-3 w-3" /></>
                        )}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="vacation-days" className="text-xs">Vacation Days/Year</Label>
                        <Input
                          id="vacation-days"
                          type="number"
                          min="0"
                          max="365"
                          value={vacationDays}
                          onChange={(e) => setVacationDays(e.target.value ? Number(e.target.value) : "")}
                        />
                      </div>
                      <div>
                        <Label htmlFor="profit-margin" className="text-xs">Profit Margin %</Label>
                        <Input
                          id="profit-margin"
                          type="number"
                          min="0"
                          max="100"
                          value={profitMargin}
                          onChange={(e) => setProfitMargin(e.target.value ? Number(e.target.value) : "")}
                        />
                      </div>
                    </div>
                    
                    {advancedExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="work-hours" className="text-xs">Hours/Day</Label>
                            <Input
                              id="work-hours"
                              type="number"
                              min="1"
                              max="24"
                              value={workHoursPerDay}
                              onChange={(e) => setWorkHoursPerDay(e.target.value ? Number(e.target.value) : "")}
                            />
                          </div>
                          <div>
                            <Label htmlFor="work-days" className="text-xs">Days/Week</Label>
                            <Input
                              id="work-days"
                              type="number"
                              min="1"
                              max="7"
                              value={workDaysPerWeek}
                              onChange={(e) => setWorkDaysPerWeek(e.target.value ? Number(e.target.value) : "")}
                            />
                          </div>
                        </div>
                        
                        <div className="rounded-md bg-accent p-3 text-sm">
                          <p>
                            <span className="font-medium">Profit Margin</span> ensures you have room for growth and unexpected expenses. The industry standard is 20-30%.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={resetHourlyCalculator}>
                    <RefreshCw className="mr-2 h-4 w-4" /> Reset
                  </Button>
                  <Button onClick={calculateHourlyRate}>
                    <Calculator className="mr-2 h-4 w-4" /> Calculate
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" /> Your Results
                  </CardTitle>
                  <CardDescription>
                    View your calculated hourly rate and breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {calculatedHourlyRate ? (
                    <>
                      <div className="rounded-lg bg-primary/10 p-6 text-center">
                        <p className="text-sm font-medium text-primary">Recommended Hourly Rate</p>
                        <div className="mt-2 text-4xl font-bold">
                          ${calculatedHourlyRate}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          per hour
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="mb-1 text-sm font-medium">Rate Breakdown</p>
                          <div className="grid grid-cols-2 gap-2 rounded-md bg-accent p-3 text-sm">
                            <div>Desired Annual Salary:</div>
                            <div className="text-right font-medium">${annualSalary}</div>
                            <div>Annual Expenses:</div>
                            <div className="text-right font-medium">${annualExpenses}</div>
                            <div>Profit Margin:</div>
                            <div className="text-right font-medium">{profitMargin}%</div>
                            <Separator className="col-span-2 my-1" />
                            <div>Working Days/Year:</div>
                            <div className="text-right font-medium">
                              {(Number(workDaysPerWeek) * 52) - Number(vacationDays)} days
                            </div>
                            <div>Working Hours/Year:</div>
                            <div className="text-right font-medium">
                              {((Number(workDaysPerWeek) * 52) - Number(vacationDays)) * Number(workHoursPerDay)} hours
                            </div>
                          </div>
                        </div>
                        
                        <div className="rounded-md bg-primary/10 p-3 text-sm">
                          <div className="flex items-start gap-2">
                            <PiggyBank className="mt-0.5 h-4 w-4 text-primary" />
                            <p>
                              This rate ensures you meet your annual income goal of ${annualSalary} with ${annualExpenses} in expenses and {profitMargin}% profit margin.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 py-8 text-center">
                      <div className="rounded-full bg-muted p-6">
                        <Calculator className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">No Calculation Yet</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Fill in the details and click Calculate to see your recommended hourly rate
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
                {calculatedHourlyRate && (
                  <CardFooter>
                    <Button className="w-full" variant="outline" onClick={downloadPdf}>
                      <Download className="mr-2 h-4 w-4" /> Download Results
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          </div>
          
          {/* Common Rates Reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Common Hourly Rates by Field</CardTitle>
                <CardDescription>
                  Industry benchmarks to help you price your services competitively
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { field: "Web Development", beginner: "25-50", intermediate: "50-100", expert: "100-200+" },
                    { field: "Graphic Design", beginner: "20-35", intermediate: "35-75", expert: "75-150+" },
                    { field: "Content Writing", beginner: "15-30", intermediate: "30-60", expert: "60-120+" },
                    { field: "Digital Marketing", beginner: "20-40", intermediate: "40-80", expert: "80-150+" },
                    { field: "Video Editing", beginner: "25-40", intermediate: "40-70", expert: "70-150+" },
                    { field: "Virtual Assistant", beginner: "15-25", intermediate: "25-40", expert: "40-75+" },
                  ].map((item, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h3 className="font-medium">{item.field}</h3>
                      <div className="mt-2 grid grid-cols-3 text-sm">
                        <div className="text-muted-foreground">Beginner</div>
                        <div className="text-muted-foreground">Intermediate</div>
                        <div className="text-muted-foreground">Expert</div>
                        <div className="font-medium">${item.beginner}</div>
                        <div className="font-medium">${item.intermediate}</div>
                        <div className="font-medium">${item.expert}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        {/* Project Rate Calculator */}
        <TabsContent value="project" className="space-y-4 pt-4">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" /> Project Rate Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate a fair project rate based on time and complexity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hourly-rate">Your Base Hourly Rate ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="hourly-rate"
                        type="number"
                        placeholder="50"
                        className="pl-9"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(e.target.value ? Number(e.target.value) : "")}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project-hours">Estimated Project Hours</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="project-hours"
                        type="number"
                        placeholder="40"
                        className="pl-9"
                        value={projectHours}
                        onChange={(e) => setProjectHours(e.target.value ? Number(e.target.value) : "")}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Project Complexity</Label>
                    <RadioGroup value={complexity.toString()} onValueChange={(value) => setComplexity(Number(value))}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="complexity-standard" />
                        <Label htmlFor="complexity-standard" className="cursor-pointer">Standard (1x)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="complexity-medium" />
                        <Label htmlFor="complexity-medium" className="cursor-pointer">Complex (1.25x)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="complexity-high" />
                        <Label htmlFor="complexity-high" className="cursor-pointer">Highly Complex (1.5x)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="additional-expenses">Additional Expenses ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="additional-expenses"
                        type="number"
                        placeholder="0"
                        className="pl-9"
                        value={expenses}
                        onChange={(e) => setExpenses(e.target.value ? Number(e.target.value) : "")}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Include any software, tools, or services you need to purchase specifically for this project.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={resetProjectCalculator}>
                    <RefreshCw className="mr-2 h-4 w-4" /> Reset
                  </Button>
                  <Button onClick={calculateProjectRate}>
                    <Calculator className="mr-2 h-4 w-4" /> Calculate
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" /> Your Results
                  </CardTitle>
                  <CardDescription>
                    View your calculated project rate and breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {calculatedProjectRate ? (
                    <>
                      <div className="rounded-lg bg-primary/10 p-6 text-center">
                        <p className="text-sm font-medium text-primary">Recommended Project Rate</p>
                        <div className="mt-2 text-4xl font-bold">
                          ${calculatedProjectRate}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          flat fee
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="mb-1 text-sm font-medium">Rate Breakdown</p>
                          <div className="grid grid-cols-2 gap-2 rounded-md bg-accent p-3 text-sm">
                            <div>Base Hourly Rate:</div>
                            <div className="text-right font-medium">${hourlyRate}</div>
                            <div>Estimated Hours:</div>
                            <div className="text-right font-medium">{projectHours} hours</div>
                            <div>Complexity Multiplier:</div>
                            <div className="text-right font-medium">
                              {complexity === 1 ? '1x (Standard)' : 
                               complexity === 2 ? '1.25x (Complex)' : 
                               '1.5x (Highly Complex)'}
                            </div>
                            <div>Additional Expenses:</div>
                            <div className="text-right font-medium">${expenses}</div>
                          </div>
                        </div>
                        
                        <div className="rounded-md bg-primary/10 p-3 text-sm">
                          <div className="flex items-start gap-2">
                            <PiggyBank className="mt-0.5 h-4 w-4 text-primary" />
                            <p>
                              This project rate is based on {projectHours} hours of work at your hourly rate of ${hourlyRate}, adjusted for complexity and additional expenses.
                            </p>
                          </div>
                        </div>
                        
                        <div className="rounded-md border border-dashed border-muted-foreground/30 p-3">
                          <h4 className="text-sm font-medium">Pro Tips for Project Pricing</h4>
                          <ul className="mt-2 space-y-2 text-xs">
                            <li className="flex items-start gap-2">
                              <span className="rounded-full bg-primary/20 p-1 text-primary">1</span>
                              <span>Always add a 20% buffer to your estimated hours for unexpected issues.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="rounded-full bg-primary/20 p-1 text-primary">2</span>
                              <span>Consider milestone payments for larger projects to improve cash flow.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="rounded-full bg-primary/20 p-1 text-primary">3</span>
                              <span>Clearly define project scope to avoid scope creep and unpaid work.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 py-8 text-center">
                      <div className="rounded-full bg-muted p-6">
                        <Calculator className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">No Calculation Yet</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Fill in the details and click Calculate to see your recommended project rate
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
                {calculatedProjectRate && (
                  <CardFooter>
                    <Button className="w-full" variant="outline" onClick={downloadPdf}>
                      <Download className="mr-2 h-4 w-4" /> Download Results
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          </div>
          
          {/* Proposal Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Turn Your Rate Into a Winning Proposal</CardTitle>
                <CardDescription>
                  Tips for presenting your rate to clients effectively
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Emphasize Value, Not Hours</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Focus on the outcomes and benefits your client will receive rather than the time it takes you.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Offer Tiered Pricing Options</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Present good, better, and best packages to give clients choices while guiding them to your preferred option.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Include Social Proof</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Add testimonials or case studies that demonstrate the value you've provided to similar clients.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RateCalculator;
