# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

_Informed guess_: The tickets could be delivered to another team members who could have or not worked on this part of the project, that's why we have a first ticket to check some general info about the situation of the system.

### Ticket #1 - General analysis

- Acceptance criteria: This task needs to answer if it is possible to create a new type of Agent that will have only Id in the Agent's table. If not, a list of the required fields should be written. Another concern should be if the system was designed to accept custom Ids. If not, this should be implemented in the system.
  _Informed guess_: If needed is better to add some fake or empty fields to an entity to populate these ids, rather than changing the way the system already works.
- Estimated time: 2 hours

### Ticket #2 - Create function addIdInFacility (may have dependencies from ticket #1)

- Description: A new function that should adds the new Id for the that selected facility in the Agents table.
- Acceptance criteria: This function should create a new Agent with the custom id provided by the user
- Implementation: A new method that should receive 2 parameters: `facilityId` and `customId`. Check if the facility exists (if not, return _not found error_). The method will save a new entry in Agent's table, using the customId as the id of the row. To add this Agent we will use saveAgent method. Based on the findings of ticket #1, we will know if we need to fill the fields that are required to generate a new Agent entry in the table.
  _Informed guess_: This is a relational table, and the Agent has facilityId
- Estimated time: 8 hours

### Ticket #3 - Modify saveAgent (may have dependencies from ticket #1)

_Informed guess_: A method like this exists

- Description: this ticket just exists if the ticket #1 found that the saveAgent method does not accept an outsider `id` (meaning that it creates its own id)
- Implementation: Modify the method to accept a id as a parameter from Agent entity that will be saved in the database
- Note: \*Careful to not break any other existing services that rely on this method
