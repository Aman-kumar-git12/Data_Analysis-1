import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# Emerald Green Theme Constants
BANK_GREEN = '#00c853'
DEEP_GREEN = '#1b5e20'
PURE_BLACK = '#0d1117'
LIGHT_GREEN = '#69f0ae'

# Set premium dark style
plt.style.use('dark_background')
plt.rcParams.update({
    'axes.facecolor': PURE_BLACK,
    'figure.facecolor': PURE_BLACK,
    'grid.color': '#222222',
    'text.color': '#c9d1d9',
    'axes.labelcolor': '#c9d1d9',
    'xtick.color': '#c9d1d9',
    'ytick.color': '#c9d1d9',
    'font.family': 'sans-serif'
})

# Load data
df = pd.read_csv('datasets/bank_loan.csv')

# Ensure directory exists
os.makedirs('public/bank_loan', exist_ok=True)

# 1. Credit Score Distribution
plt.figure(figsize=(10, 8))
sns.histplot(df['Credit Score'].dropna(), bins=50, color=BANK_GREEN, kde=True)
plt.title('Credit Health Distribution', fontsize=20, color=BANK_GREEN, fontweight='bold')
plt.savefig('public/bank_loan/image1.png', dpi=120, bbox_inches='tight')

# 2. Income vs Loan Amount Scatter
plt.figure(figsize=(12, 7))
sns.scatterplot(data=df.sample(1000), x='Annual Income', y='Current Loan Amount', hue='Term', palette=[BANK_GREEN, LIGHT_GREEN], alpha=0.6)
plt.title('Income vs Requested Capital', fontsize=18, color=BANK_GREEN)
plt.savefig('public/bank_loan/image2.png', dpi=120, bbox_inches='tight')

# 3. Housing Risk Boxplot
plt.figure(figsize=(12, 7))
sns.boxplot(data=df, x='Home Ownership', y='Months since last delinquent', color=BANK_GREEN)
plt.title('Delinquency Variance by Housing', fontsize=18, color=BANK_GREEN)
plt.savefig('public/bank_loan/image3.png', dpi=120, bbox_inches='tight')

# 4. Purpose Bar Chart
plt.figure(figsize=(12, 7))
purpose_counts = df['Purpose'].value_counts().head(8)
purpose_counts.plot(kind='bar', color=DEEP_GREEN, edgecolor=BANK_GREEN)
plt.title('Primary Loan Drivers', fontsize=18, color=BANK_GREEN)
plt.xticks(rotation=45)
plt.savefig('public/bank_loan/image4.png', dpi=120, bbox_inches='tight')

# 5. Bankruptcy Impact
plt.figure(figsize=(10, 7))
sns.barplot(data=df, x='Bankruptcies', y='Credit Score', palette='Greens', errorbar=None)
plt.title('Financial History vs Credit Rating', fontsize=18, color=BANK_GREEN)
plt.savefig('public/bank_loan/image5.png', dpi=120, bbox_inches='tight')

print("Bank Loan Emerald Green images generated successfully.")
