# # stabilize_data.py
# import pandas as pd

# def stabilize_data(csv_file):
#     # Add your data stabilization logic here
#     # For example, removing NaN values
#     df = pd.read_csv(csv_file)
#     df = df.dropna()
#     return df

# if __name__ == '__main__':
#     stabilized_data = stabilize_data('dataset.csv')
#     stabilized_data.to_csv('stabilized_dataset.csv', index=False)

# stabilize_data.py
import pandas as pd

def stabilize_data(csv_file):
    try:
        # Read the CSV file
        df = pd.read_csv(csv_file)

        # Handle missing values (you can customize this part based on your needs)
        df = df.dropna()

        # Additional stabilization steps can be added as needed

        # Save the stabilized data to a new CSV file
        df.to_csv('stabilized_dataset.csv', index=False)

        print("Data stabilization successful.")
    except Exception as e:
        print(f"Error during data stabilization: {e}")

if __name__ == '__main__':
    stabilize_data('dataset.csv')
