# FHIR-D3 Web App

This is a simple web application that utilizes FHIR-encoded data, D3.js for visualization, and includes backend logic for data stabilization. The project includes a React frontend, a Node.js backend, and Python scripts for data manipulation.

## Project Structure

- `fhir-d3-react-app`: Contains the React frontend.
- `server.js`: Backend logic for serving the React app, handling API requests, and converting CSV to FHIR.
- `stabilize_data.py`: Python script for stabilizing the dataset.
- `data.json`: Sample FHIR-encoded data.
- `dataset.csv`: Sample dataset file.

## Setup Instructions

### Frontend (React App)

1. Navigate to the `fhir-d3-react-app` directory.

    ```bash
    cd fhir-d3-react-app
    ```

2. Install dependencies.

    ```bash
    npm install
    ```

3. Start the development server.

    ```bash
    npm start
    ```

4. Open your browser and go to http://localhost:3000 to view the React app.

### Backend (Node.js)

1. Install Node.js dependencies.

    ```bash
    npm install
    ```

2. Start the backend server.

    ```bash
    node server.js
    ```

3. The backend server will run on http://localhost:3001.

### Data Stabilization (Python)

1. Create a virtual environment and activate it.

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

2. Install Python dependencies.

    ```bash
    pip install pandas
    ```

3. Run the data stabilization script.

    ```bash
    python stabilize_data.py
    ```

## Usage

1. Access the React app at http://localhost:3000.

2. The backend provides API endpoints:
   - `/api/data`: Retrieve FHIR-encoded data.
   - `/api/convert`: Convert CSV data to FHIR.

3. Adjust the frontend and backend code based on your specific project requirements.

## Notes

- Customize the FHIR conversion logic, data stabilization, and visualization based on your dataset and needs.

- Ensure that necessary libraries and dependencies are installed (D3.js, csvtojson, pandas).

## Contributors

- Hasin Arman

Feel free to contribute, report issues, or suggest improvements!
