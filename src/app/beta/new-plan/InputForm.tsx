'use client'

import React, { useState } from 'react'
import './page.css'
import Default from '@/components/default/Default'

const InputForm = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        current_monthly_income: '',
        monthly_expenditure: '',
        existing_savings: '',
        retirement_age: '',
        risk_tolerance: '',
        retirement_lifestyle: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <div className="form-step">
                            <h2 className="step-title">👤 Personal Information</h2>
                            <p className="step-description">
                                Help us understand your personal background to create a tailored retirement plan.
                            </p>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="age">Age</label>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        className="form-input"
                                        placeholder="Your current age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )

            case 2:
                return (
                    <div className="form-step">
                        <h2 className="step-title">💰 Financial Status</h2>
                        <p className="step-description">
                            Provide details about your current financial situation.
                        </p>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label" htmlFor="current_monthly_income">Current Monthly Income</label>
                                <input
                                    type="number"
                                    id="current_monthly_income"
                                    name="current_monthly_income"
                                    className="form-input"
                                    placeholder="Enter your monthly income"
                                    value={formData.current_monthly_income}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="monthly_expenditure">Monthly Expenditure</label>
                                <input
                                    type="number"
                                    id="monthly_expenditure"
                                    name="monthly_expenditure"
                                    className="form-input"
                                    placeholder="Your monthly expenses"
                                    value={formData.monthly_expenditure}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                )

            case 3:
                return (
                    <div className="form-step">
                        <h2 className="step-title">💼 Savings and Retirement</h2>
                        <p className="step-description">
                            Tell us about your savings and retirement plans.
                        </p>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label" htmlFor="existing_savings">Existing Savings</label>
                                <input
                                    type="number"
                                    id="existing_savings"
                                    name="existing_savings"
                                    className="form-input"
                                    placeholder="Your current savings"
                                    value={formData.existing_savings}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="retirement_age">Retirement Age</label>
                                <input
                                    type="number"
                                    id="retirement_age"
                                    name="retirement_age"
                                    className="form-input"
                                    placeholder="Desired retirement age"
                                    value={formData.retirement_age}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                )

            case 4:
                return (
                    <div className="form-step">
                        <h2 className="step-title">🎯 Investment Profile</h2>
                        <p className="step-description">
                            Define your risk tolerance and retirement lifestyle goals.
                        </p>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label" htmlFor="risk_tolerance">Risk Tolerance</label>
                                <select
                                    id="risk_tolerance"
                                    name="risk_tolerance"
                                    className="form-select"
                                    value={formData.risk_tolerance}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Risk Tolerance</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="retirement_lifestyle">Retirement Lifestyle</label>
                                <select
                                    id="retirement_lifestyle"
                                    name="retirement_lifestyle"
                                    className="form-select"
                                    value={formData.retirement_lifestyle}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Lifestyle</option>
                                    <option value="modest">Modest</option>
                                    <option value="comfortable">Comfortable</option>
                                    <option value="luxurious">Luxurious</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    const handleNext = () => {
        if (currentStep < 4) setCurrentStep((prev) => prev + 1)
    }

    const handlePrevious = () => {
        if (currentStep > 1) setCurrentStep((prev) => prev - 1)
    }

    const handleSubmit = () => {
        console.log('Submitted Form Data:', formData)
        // In a real application, you would typically send this data to a backend service
        alert('Retirement Plan Form Submitted!')
    }

    return (
        <div className="container">
            <div className="card">
                <div className="progress-bar">
                    {[1, 2, 3, 4].map((step) => (
                        <div
                            key={step}
                            className={`progress-step ${currentStep === step ? 'active' : ''}`}
                        />
                    ))}
                </div>
                {renderStep()}
                <div className="button-group">
                    {currentStep > 1 && (
                        <button
                            className="button button-primary"
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                    )}
                    {currentStep < 4 ? (
                        <button
                            className="button button-primary"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className="button button-success"
                            onClick={handleSubmit}
                        >
                            Calculate Retirement Plan
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InputForm

