import React from "react";
import { motion } from "framer-motion";
import { CardContent, TabContent } from "@/components/ui/card-content";
import {
  Heart,
  PiggyBank,
  Briefcase,
  Shield,
  ArrowRight,
  Sparkles,
  Hourglass,
  DollarSign,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Benefits = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold">Benefits Navigator</h1>
        <p className="text-muted-foreground">
          Explore health insurance, retirement, and paid leave options.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        <CardContent
          title="Health Insurance"
          icon={<Heart className="h-5 w-5" />}
          className="hover-scale"
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Find affordable health insurance plans designed for gig workers.
            </p>
            <div className="rounded-md bg-primary/10 p-3">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  5 plans recommended for you
                </span>
              </div>
            </div>
            <Button className="w-full">Compare Plans</Button>
          </div>
        </CardContent>

        <CardContent
          title="Retirement Planning"
          icon={<PiggyBank className="h-5 w-5" />}
          className="hover-scale"
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Self-employed retirement options to secure your future.
            </p>
            <div className="rounded-md bg-primary/10 p-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  SEP IRA and Solo 401(k) options
                </span>
              </div>
            </div>
            <Button className="w-full">Explore Options</Button>
          </div>
        </CardContent>

        <CardContent
          title="Paid Leave Planning"
          icon={<Briefcase className="h-5 w-5" />}
          className="hover-scale"
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Plan and save for time off without losing income.
            </p>
            <div className="rounded-md bg-primary/10 p-3">
              <div className="flex items-center gap-2">
                <Hourglass className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  Create a paid leave fund
                </span>
              </div>
            </div>
            <Button className="w-full">Start Planning</Button>
          </div>
        </CardContent>
      </div>

      <TabContent
        tabs={[
          {
            label: "Health Insurance",
            content: (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    Recommended Insurance Plans
                  </h3>
                  <Button variant="outline" size="sm">
                    Filter Options
                  </Button>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Basic Health Plan",
                      premium: "$250/month",
                      coverage: "Basic coverage for essential health needs",
                      rating: 4.2,
                    },
                    {
                      name: "Standard Health Plan",
                      premium: "$350/month",
                      coverage: "Comprehensive coverage with dental options",
                      rating: 4.5,
                    },
                    {
                      name: "Premium Health Plan",
                      premium: "$450/month",
                      coverage:
                        "Full coverage including vision and specialists",
                      rating: 4.8,
                    },
                  ].map((plan, i) => (
                    <div
                      key={i}
                      className="rounded-md border p-4 transition-colors hover:border-primary/50 hover:bg-accent/50"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{plan.name}</h4>
                        <div className="text-sm font-medium text-primary">
                          {plan.premium}
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {plan.coverage}
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium">
                            {plan.rating}
                          </span>
                          <span className="text-yellow-500">★★★★★</span>
                          <span className="text-xs text-muted-foreground">
                            (128 reviews)
                          </span>
                        </div>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button>
                    Browse All Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ),
          },
          {
            label: "Retirement Options",
            content: (
              <div className="space-y-6">
                <div className="rounded-md bg-accent p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/20 p-3">
                      <Info className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        Why gig workers need retirement plans
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Without employer-sponsored plans, it's essential to set
                        up your own retirement savings strategy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Solo 401(k)",
                      desc: "High contribution limits, good for high earners",
                      limit: "$66,000/year",
                    },
                    {
                      name: "SEP IRA",
                      desc: "Simple to set up, flexible contributions",
                      limit: "25% of net income",
                    },
                    {
                      name: "Traditional/Roth IRA",
                      desc: "Lower limits but easy to start",
                      limit: "$6,500/year",
                    },
                  ].map((option, i) => (
                    <div
                      key={i}
                      className="rounded-md border p-4 transition-colors hover:border-primary/50 hover:bg-accent/50"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{option.name}</h4>
                        <div className="text-sm font-medium">
                          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                            {option.limit}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {option.desc}
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Button size="sm">Learn More</Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full">
                  Talk to a Retirement Specialist
                </Button>
              </div>
            ),
          },
          {
            label: "Emergency Fund",
            content: (
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-md border p-5">
                    <h3 className="font-medium">Emergency Fund</h3>
                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <div className="text-3xl font-bold">$3,500</div>
                        <div className="text-sm text-muted-foreground">
                          of $10,000 goal
                        </div>
                      </div>
                      <div className="text-xl font-medium text-primary">
                        35%
                      </div>
                    </div>
                    <div className="mt-4">
                      <Progress value={35} className="h-2" />
                    </div>
                    <div className="mt-4">
                      <Button className="w-full">Add Funds</Button>
                    </div>
                  </div>

                  <div className="rounded-md border p-5">
                    <h3 className="font-medium">Paid Leave Fund</h3>
                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <div className="text-3xl font-bold">$1,200</div>
                        <div className="text-sm text-muted-foreground">
                          of $5,000 goal
                        </div>
                      </div>
                      <div className="text-xl font-medium text-primary">
                        24%
                      </div>
                    </div>
                    <div className="mt-4">
                      <Progress value={24} className="h-2" />
                    </div>
                    <div className="mt-4">
                      <Button className="w-full">Add Funds</Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border border-gray-300 dark:border-gray-700 p-4 bg-white dark:bg-gray-900 transition-all">
                  {/* Title */}
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    Emergency Fund Calculator
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Our calculator helps you determine how much to save based on
                    your monthly expenses.
                  </p>

                  {/* Inputs Section */}
                  <div className="mt-4 space-y-3">
                    {/* Monthly Expenses */}
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Monthly Expenses
                      </label>
                      <input
                        type="number"
                        className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 p-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        placeholder="$3,000"
                      />
                    </div>

                    {/* Months of Coverage */}
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Months of Coverage
                      </label>
                      <select className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 p-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all">
                        <option value="3">3 months</option>
                        <option value="6">6 months</option>
                        <option value="9">9 months</option>
                        <option value="12">12 months</option>
                      </select>
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <div className="mt-4">
                    <Button className="w-full bg-primary text-white dark:bg-primary/80 dark:hover:bg-primary/90 transition-all">
                      Calculate Needs
                    </Button>
                  </div>
                </div>

                <div className="rounded-md bg-primary/10 p-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Savings Tip</h3>
                      <p className="mt-1 text-sm">
                        Set aside 5-10% of each payment you receive to
                        automatically build your emergency fund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Benefits;
