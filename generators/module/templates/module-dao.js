// This is a file generated by the yeoman generator hapijs

/**
 * Dao layer which actually gets <%= name %> from the datastore
 *
 * @type {exports}
 */

module.exports = function() {

  return {

    /**
     * Creates a <%= name %>
     *
     * @param payload - The data to be used to create a <%= name %>
     * @param callback
     */
    create<%= name %>: function create<%= name %>(payload, callback) {
      // TODO: Implement dao method and call callback(null, <data>)
    },

    /**
     * Find all <%= name %>
     *
     * @param callback
     */
    findTasksByPatientId: function findTasksByPatientId(callback) {
      // TODO: Implement dao method and call callback(null, <data>)
    },

    /**
     * Get's all <%= name %>
     *
     * @param callback
     */
    find<%= name %>: function findTasksForUser(callback) {
      // TODO: Implement dao method and call callback(null, <data>)
    },

    /**
     * Get's a specific <%= name %> by the id
     *
     * @param id  - The id of the <%= name %> to get
     * @param callback
     */
    find<%= name %>ById: function findTaskById(id, callback) {
      // TODO: Implement dao method and call callback(null, <data>)
    },

    /**
     * Updates a specific <%= name %>
     *
     * @param id      - The id of the <%= name %> to be updated
     * @param payload - The data to be updated
     * @param callback
     */
    update<%= name %>: function update<%= name %>(id, payload, callback) {
      // TODO: Implement dao method and call callback(null, <data>)
    }
  }

}();
