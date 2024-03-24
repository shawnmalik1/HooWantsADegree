import requests
from bs4 import BeautifulSoup
import pandas as pd

# URL of the website to scrape
url = "https://louslist.org/summary.php?Semester=1248&Type=Group&Group=APMA"

# Send an HTTP GET request to the website
response = requests.get(url)

# Parse the HTML code using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Extract the relevant information from the HTML code
courses = []
# Select all <a> tags with class 'Link' that contain course information
for a_tag in soup.find_all('a', class_='Link'):
    # Extract the title attribute content
    title_content = a_tag.get('title', '')
    # Check if the title attribute contains 'Detailed Information about' to identify course links
    if 'Detailed Information about' in title_content:
        # Extract course code and name from the title attribute
        title_parts = title_content.replace('Detailed Information about', '').strip()
        # Split the string by spaces and remove the section number
        course_parts = title_parts.split(' ')
        course_code = course_parts[0].strip()
        course_name = ' '.join(course_parts[1:-1]).strip()  # Exclude the last part (section number)
        courses.append([course_code, course_name])

unique_courses = []
for course in courses:
    if course not in unique_courses:
        unique_courses.append(course)

# Store the information in a pandas dataframe
df = pd.DataFrame(unique_courses, columns=['Course Code', 'Course Name'])

# Output the dataframe to a CSV file
df.to_csv('uva_apma2.csv', index=False)

