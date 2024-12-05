"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Shield, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import Default from "@/components/default/Default";

const styles: any = {
  dashboardContainer: {
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "#030712",
    color: "#f3f4f6",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
    background: "linear-gradient(135deg, #c084fc, #f472b6, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    padding: "2rem 0",
  },
  headerTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "2.5rem",
  },
  card: {
    background: "linear-gradient(145deg, #111827, #1f2937)",
    borderRadius: "1rem",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
    },
  },
  cardHeader: {
    padding: "1.75rem",
    borderBottom: "1px solid rgba(156, 163, 175, 0.1)",
    background: "rgba(31, 41, 55, 0.5)",
  },
  cardTitle: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#f3f4f6",
  },
  cardContent: {
    padding: "1.75rem",
    height: "300px",
  },
  actionContainer: {
    background: "linear-gradient(145deg, #111827, #1f2937)",
    borderRadius: "1rem",
    padding: "2rem",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  },
  actionItem: {
    borderLeft: "4px solid",
    marginBottom: "1.5rem",
    borderRadius: "0.75rem",
    padding: "1.25rem",
    background: "rgba(31, 41, 55, 0.5)",
    transition: "transform 0.2s ease",
  },
  actionHeader: {
    display: "flex",
    gap: "1rem",
    marginBottom: "0.75rem",
  },
  badge: {
    padding: "0.35rem 1rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  priorityBadge: {
    backgroundColor: "#374151",
    color: "#f3f4f6",
  },
  impactBadge: {
    border: "1px solid",
    background: "rgba(0, 0, 0, 0.1)",
  },
  icon: {
    color: "#c084fc",
  },
};

const ReportPage = ({
  pieData,
  projectionsData,
  riskData,
  actionItems,
  name,
  current_age,
  retirement_age,
  lifestyle,
  summary,
}: {
  pieData: any;
  projectionsData: any;
  riskData: any;
  actionItems: any;
  name: string;
  current_age: number;
  retirement_age: number;
  lifestyle: string;
  summary: string;
}) => {
  /* const pieData = [
    { name: "Equities", value: 60 },
    { name: "Fixed Income", value: 20 },
    { name: "REITs", value: 10 },
    { name: "Cash", value: 10 },
  ];

  const projectionsData = [
    { year: 35, projected_savings: 800000 },
    { year: 40, projected_savings: 1300000 },
    { year: 45, projected_savings: 1700000 },
    { year: 50, projected_savings: 1900000 },
    { year: 55, projected_savings: 2000000 },
  ];

  const riskData = [
    { subject: "Market Volatility", risk: 65 },
    { subject: "Inflation Risk", risk: 45 },
    { subject: "Longevity Risk", risk: 85 },
    { subject: "Credit Risk", risk: 55 },
    { subject: "Liquidity Risk", risk: 60 },
  ];

  const actionItems = [
    {
      priority: 1,
      impact: "High",
      title: "Increase Monthly Contributions",
      description:
        "Consider increasing your monthly retirement savings by 15% to meet your target goals.",
      color: "#ef4444",
    },
    {
      priority: 2,
      impact: "Medium",
      title: "Rebalance Portfolio",
      description:
        "Adjust your investment allocations to maintain optimal risk-reward balance.",
      color: "#fbbf24",
    },
    {
      priority: 3,
      impact: "Medium",
      title: "Review Tax Strategy",
      description:
        "Explore tax-advantaged retirement accounts and investment options.",
      color: "#fbbf24",
    },
  ]; */

  const COLORS = ["#c084fc", "#f472b6", "#22d3ee", "#34d399"];
  const ActionItem = ({
    priority,
    impact,
    title,
    description,
    color,
  }: {
    priority: number;
    impact: string;
    title: string;
    description: string;
    color: string;
  }) => (
    <div style={{ ...styles.actionItem, borderLeftColor: color }}>
      <div style={styles.actionHeader}>
        <span style={{ ...styles.badge, ...styles.priorityBadge }}>
          Priority {priority}
        </span>
        <span
          style={{
            ...styles.badge,
            ...styles.impactBadge,
            borderColor: color,
            color,
          }}
        >
          {impact} Impact
        </span>
      </div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          marginBottom: "0.75rem",
          color: "#f3f4f6",
        }}
      >
        {title}
      </h3>
      <p style={{ color: "#9ca3af", lineHeight: "1.5" }}>{description}</p>
    </div>
  );
  return (
    <>
      <Default current="Dashboard">
        <div style={styles.dashboardContainer}>
          <div style={styles.container}>
            <div style={styles.header}>
              <h1 style={styles.headerTitle}>Retirement Analysis</h1>
            </div>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.cardTitle}>Profile</div>
              </div>
              <div style={styles.cardContent}>
                Name: {name}
                <br />
                <br />
                Current Age: {current_age}
                <br />
                <br />
                Retirement Age: {retirement_age}
                <br />
                <br />
                Lifestyle Preference: {lifestyle}
              </div>
            </div>
            <div style={{ height: "2rem" }}></div>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.cardTitle}>Summary</div>
              </div>
              <div style={styles.cardContent}>{summary}</div>
            </div>
            <div style={{ height: "2rem" }}></div>
            <div style={styles.gridContainer}>
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardTitle}>
                    <TrendingUp style={styles.icon} />
                    Investment Strategy
                  </div>
                </div>
                <div style={styles.cardContent}>
                  <ResponsiveContainer width={"100%"} height={"100%"}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {pieData.map((entry: any, index: number) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#374151",
                          borderColor: "#374151",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardTitle}>
                    <Shield style={styles.icon} />
                    Risk Analysis
                  </div>
                </div>
                <div style={styles.cardContent}>
                  <ResponsiveContainer width={"100%"} height={"100%"}>
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="70%"
                      data={riskData}
                    >
                      <PolarGrid stroke="#374151" />
                      <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
                      <PolarRadiusAxis stroke="#374151" />
                      <Radar
                        name="Risk Score"
                        dataKey="risk"
                        stroke={COLORS[0]}
                        fill={COLORS[0]}
                        fillOpacity={0.5}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          borderColor: "#374151",
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardTitle}>
                    <DollarSign style={styles.icon} />
                    Savings Projection
                  </div>
                </div>
                <div style={styles.cardContent}>
                  <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={projectionsData}>
                      <XAxis dataKey="year" stroke="#9ca3af" />
                      <YAxis
                        stroke="#9ca3af"
                        tickFormatter={(value: number) => `${value / 1000}k`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          borderColor: "#374151",
                        }}
                        formatter={(value: number) => [
                          `${(value / 1000).toFixed(0)}k`,
                          "Projected Savings",
                        ]}
                      />
                      <Line
                        type="monotone"
                        dataKey="projected_savings"
                        stroke={COLORS[0]}
                        strokeWidth={3}
                        dot={{ fill: COLORS[0] }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div style={styles.actionContainer}>
              <div style={styles.cardTitle}>
                <AlertTriangle style={styles.icon} />
                Recommended Action
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                {actionItems.map((item: any, index: number) => (
                  <ActionItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default ReportPage;
