import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import os

# GitHub Contribution Green Palette
GH_LEVEL_1 = '#0e4429'
GH_LEVEL_2 = '#006d32'
GH_LEVEL_3 = '#26a641'
GH_LEVEL_4 = '#39d353'
PURE_BLACK = '#0d1117'

# Set premium dark style
plt.style.use('dark_background')
plt.rcParams.update({
    'axes.facecolor': PURE_BLACK,
    'figure.facecolor': PURE_BLACK,
    'grid.color': '#21262d',
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
sns.histplot(df['Credit Score'].dropna(), bins=50, color=GH_LEVEL_4, kde=True)
plt.title('Credit Health Analysis', fontsize=20, color=GH_LEVEL_4, fontweight='bold')
plt.savefig('public/bank_loan/image1.png', dpi=120, bbox_inches='tight')

# 2. Term Pie
plt.figure(figsize=(10, 8))
df['Term'].value_counts().plot(kind='pie', autopct='%1.1f%%', colors=[GH_LEVEL_2, GH_LEVEL_4], explode=(0.05, 0), shadow=True)
plt.title('Loan Term Split', fontsize=18, color=GH_LEVEL_4)
plt.ylabel('')
plt.savefig('public/bank_loan/image2.png', dpi=120, bbox_inches='tight')

# 3. Income Scatter
plt.figure(figsize=(12, 7))
sns.scatterplot(data=df.sample(1000), x='Annual Income', y='Current Loan Amount', color=GH_LEVEL_3, alpha=0.6)
plt.title('Income vs Requested Capital', fontsize=18, color=GH_LEVEL_4)
plt.savefig('public/bank_loan/image3.png', dpi=120, bbox_inches='tight')

# 4. Housing Bar
plt.figure(figsize=(12, 7))
sns.barplot(data=df, x='Home Ownership', y='Credit Score', color=GH_LEVEL_2, ci=None)
plt.title('Credit Score by Housing', fontsize=18, color=GH_LEVEL_4)
plt.savefig('public/bank_loan/image4.png', dpi=120, bbox_inches='tight')

# 5. Correlation Heatmap
plt.figure(figsize=(12, 10))
numeric_df = df.select_dtypes(include=[np.number])
gh_cmap = sns.color_palette(["#161b22", GH_LEVEL_1, GH_LEVEL_2, GH_LEVEL_3, GH_LEVEL_4], as_cmap=True)
sns.heatmap(numeric_df.corr(), annot=True, cmap=gh_cmap, fmt=".2f", linewidths=0.5)
plt.title('Financial Feature Correlations', fontsize=18, color=GH_LEVEL_4)
plt.savefig('public/bank_loan/image5.png', dpi=120, bbox_inches='tight')

print("Bank Loan GitHub-themed images generated successfully.")
