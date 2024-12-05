import React from "react";
import axios from "axios";
import ReportPage from "./ReportPage";

const backend = process.env.BACKEND_URL;

//{ params }: { params: { id: number } }

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  // Styles directly in component for immediate visualization
  const response = await axios.post(`${backend}/ai/view-analysis`, {
    id: (await params).id,
  });
  const report = response.data;
  const strategy = JSON.parse(report.investment_strategy);
  const pieData = [
    { name: "Equities", value: strategy.investment_strategy.equities },
    { name: "Fixed Income", value: strategy.investment_strategy.fixed_income },
    { name: "REITs", value: strategy.investment_strategy.reits },
    { name: "Cash", value: strategy.investment_strategy.cash },
  ];

  let projectionsData = [];

  for (let i = 0; i < strategy.projections.yearly_projections.length; i++) {
    projectionsData.push({
      year: strategy.projections.yearly_projections[i].year,
      projected_savings:
        strategy.projections.yearly_projections[i].projected_savings,
    });
  }

  let riskData = [];

  for (let i = 0; i < strategy.risk_analysis.risk_factors.length; i++) {
    riskData.push({
      subject: strategy.risk_analysis.risk_factors[i].factor,
      risk: strategy.risk_analysis.risk_factors[i].impact,
    });
  }

  const actionItems = [];

  for (let i = 0; i < strategy.recommendations.length; i++) {
    actionItems.push({
      priority: strategy.recommendations[i].priority,
      title: strategy.recommendations[i].action,
      description: strategy.recommendations[i].impact,
    });
  }

  console.log(pieData);
  console.log(projectionsData);
  console.log(riskData);
  console.log(actionItems);
  return (
    <>
      <ReportPage
        pieData={pieData}
        projectionsData={projectionsData}
        riskData={riskData}
        actionItems={actionItems}
        name={report.name}
        current_age={report.age}
        retirement_age={report.risk_tolerance}
        lifestyle={report.retirement_lifestyle}
        summary={strategy.summary}
      />
    </>
  );
};

export default Page;
