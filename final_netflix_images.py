import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# Netflix Premium Aesthetic Constants
NETFLIX_RED = '#E50914'
PURE_BLACK = '#000000'
LIGHT_GRAY = '#F5F5F1'

# Set premium dark style
plt.style.use('dark_background')
plt.rcParams.update({
    'axes.facecolor': PURE_BLACK,
    'figure.facecolor': PURE_BLACK,
    'grid.color': '#222222',
    'text.color': LIGHT_GRAY,
    'axes.labelcolor': LIGHT_GRAY,
    'xtick.color': LIGHT_GRAY,
    'ytick.color': LIGHT_GRAY,
    'font.family': 'sans-serif'
})

# Load data
df = pd.read_csv('datasets/netflix_churn.csv')

# Ensure directory exists
os.makedirs('public/netflix', exist_ok=True)

# 1. Retention Pulse
plt.figure(figsize=(10, 8))
data = df['churned'].value_counts()
plt.pie(data, labels=['Active', 'Churned'], autopct='%1.1f%%', 
       startangle=140, colors=['#333333', NETFLIX_RED], 
       explode=(0, 0.1), shadow=True)
plt.title('Subscription Retention Pulse', fontsize=20, color=NETFLIX_RED, fontweight='bold')
plt.savefig('public/netflix/image1.png', dpi=120, bbox_inches='tight')

# 2. Watch Hours vs Age Scatter
plt.figure(figsize=(12, 7))
sns.scatterplot(data=df.sample(800), x='age', y='watch_hours', hue='churned', palette=['#444444', NETFLIX_RED], alpha=0.7, s=100)
plt.title('Scatter Analysis: Age vs Watch Hours', fontsize=18, color=NETFLIX_RED)
plt.savefig('public/netflix/image2.png', dpi=120, bbox_inches='tight')

# 3. Tier Count
plt.figure(figsize=(12, 7))
sns.countplot(data=df, x='subscription_type', hue='churned', palette=['#444444', NETFLIX_RED])
plt.title('Tier Loyalty Analysis', fontsize=18, color=NETFLIX_RED)
plt.savefig('public/netflix/image3.png', dpi=120, bbox_inches='tight')

# 4. Regional Churn Bar
plt.figure(figsize=(14, 7))
region_churn = df.groupby('region')['churned'].mean().sort_values() * 100
region_churn.plot(kind='barh', color=NETFLIX_RED, edgecolor='white')
plt.title('Regional Market Risk (%)', fontsize=18, color=NETFLIX_RED)
plt.savefig('public/netflix/image4.png', dpi=120, bbox_inches='tight')

# 5. Genre Analysis
plt.figure(figsize=(12, 7))
sns.barplot(data=df, x='favorite_genre', y='churned', color=NETFLIX_RED, errorbar=None)
plt.title('Churn Risk by Favorite Genre', fontsize=18, color=NETFLIX_RED)
plt.xticks(rotation=45)
plt.savefig('public/netflix/image5.png', dpi=120, bbox_inches='tight')

print("All 5 Netflix images updated successfully.")
