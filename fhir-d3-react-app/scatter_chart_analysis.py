# scatter_chart_analysis.py
import pandas as pd
import matplotlib.pyplot as plt

def scatter_chart_analysis(csv_file):
    # Add your scatter chart analysis logic here
    df = pd.read_csv(csv_file)
    # Example: Scatter plot of age vs heartRate
    plt.scatter(df['age'], df['heartRate'])
    plt.xlabel('Age')
    plt.ylabel('Heart Rate')
    plt.title('Scatter Chart: Age vs Heart Rate')
    plt.show()

if __name__ == '__main__':
    scatter_chart_analysis('stabilized_dataset.csv')
